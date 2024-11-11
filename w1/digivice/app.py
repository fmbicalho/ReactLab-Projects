import requests
from bs4 import BeautifulSoup

def scrape_digimon_info(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    name_tag = soup.find("h2", class_="pi-title")
    name = name_tag.find("span").text if name_tag else "Unknown"

    level_tag = soup.find("div", {"data-source": "level"})
    level = level_tag.find("div", class_="pi-data-value").text.strip() if level_tag else "Unknown"

    type_tag = soup.find("div", {"data-source": "type"})
    digimon_type = type_tag.find("div", class_="pi-data-value").text.strip() if type_tag else "Unknown"

    attribute_tag = soup.find("div", {"data-source": "attribute"})
    attribute = attribute_tag.find("div", class_="pi-data-value").text.strip() if attribute_tag else "Unknown"

    family_tag = soup.find("div", {"data-source": "family"})
    family = family_tag.find("div", class_="pi-data-value").text.strip().replace("<br>", ", ") if family_tag else "Unknown"

    size_tag = soup.find("div", {"data-source": "size"})
    size = size_tag.find("div", class_="pi-data-value").text.strip() if size_tag else "Unknown"

    next_forms_tag = soup.find("div", {"data-source": "next forms"})
    next_forms = next_forms_tag.find("div", class_="pi-data-value").text.strip() if next_forms_tag else "Unknown"

    return {
        "name": name,
        "level": level,
        "type": digimon_type,
        "attribute": attribute,
        "family": family,
        "size": size,
        "nextForms": next_forms,
    }

digimon_info = scrape_digimon_info("https://digimon.fandom.com/wiki/Koromon")
