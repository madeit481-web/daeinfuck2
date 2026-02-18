document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersDisplay = document.querySelector('.numbers-display');

    generateBtn.addEventListener('click', () => {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNum);
        }

        numbersDisplay.innerHTML = ''; 
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach(num => {
            const numberElement = document.createElement('div');
            numberElement.classList.add('number');
            numberElement.textContent = num;
            numbersDisplay.appendChild(numberElement);
        });
    });
});
