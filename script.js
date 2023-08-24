// Calculator

document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate');
    const resultMessage = document.getElementById('resultMessage');

    calculateButton.addEventListener('click', function () {
        const monthlyGoal = parseFloat(document.getElementById('monthlyGoal').value);
        const dailySavings = parseFloat(document.getElementById('dailySavings').value);

        if (isNaN(monthlyGoal) || isNaN(dailySavings)) {
            resultMessage.textContent = 'Please enter valid amounts.';
            return;
        }

        const totalSavings = dailySavings * 30; // Assuming 30 days in a month

        if (totalSavings > monthlyGoal) {
            resultMessage.textContent = 'You will save more than your goal!';
        } else if (totalSavings === monthlyGoal) {
            resultMessage.textContent = 'You will save exactly your goal amount.';
        } else {
            resultMessage.textContent = 'You will not save enough to reach your goal.';
        }
    });
});