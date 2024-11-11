document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.box');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }



    function setColor(box) {
        const color = getRandomColor();
        const colorDisplay = box.querySelector('.color-display');
        const colorLabel = box.querySelector('.color-label');

        colorDisplay.style.backgroundColor = color;
        colorLabel.textContent = color;
    }

    boxes.forEach(box => {
        const button = box.querySelector('.color-button');
        button.addEventListener('click', () => {
            setColor(box);
        });
    });



    function setAllColors() {
        boxes.forEach(box => setColor(box));
    }

    const generateAllButton = document.getElementById('generate-all');
    generateAllButton.addEventListener('click', setAllColors);



    setAllColors();
    
});
