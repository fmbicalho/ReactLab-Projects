import routes from './routes.js';

async function launchController(controllerName, page, params = {}) {
  try {
    const controller = await import(`../controller/${controllerName}.js`);
    controller.init(page, params);
  } catch (error) {
    console.error(`Controller "${controllerName}" not found.`, error);
  }
}

function setCurrentRoute({ path, controller }) {
  routes.currentPath.path = path;
  routes.currentPath.controller = controller;
}

function getRoute(path) {
  const routeKey = Object.keys(routes).find(key => {
    const routePath = routes[key].path.replace(/:\w+/g, '[^/]+');
    return new RegExp(`^${routePath}$`).test(path);
  });
  return routes[routeKey] || routes.home;
}

function extractParams(route, path) {
  const paramNames = (route.path.match(/:(\w+)/g) || []).map(param => param.substring(1));
  const paramValues = path.match(new RegExp(route.path.replace(/:\w+/g, '([^/]+)')))?.slice(1) || [];
  return Object.fromEntries(paramNames.map((name, i) => [name, paramValues[i]]));
}

function render(route, params) {
  const root = document.querySelector('#root-container');
  const page = document.createElement('div');
  root.innerHTML = '';
  root.appendChild(page);
  launchController(route.controller, page, params);
}

export function navigate(path, initialFullPageLoad = false) {
  const route = getRoute(path);
  const params = extractParams(route, path);

  setCurrentRoute(route);

  if (initialFullPageLoad) {
    history.replaceState({ path, params }, '', path);
  } else {
    history.pushState({ path, params }, '', path);
  }

  render(route, params);
}

export default function init() {
  const path = document.location.pathname;
  navigate(path, true);

  window.onpopstate = ({ state }) => {
    navigate(state ? state.path : '/', true);
  };
}
