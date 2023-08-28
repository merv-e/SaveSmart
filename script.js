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
            resultMessage.textContent = 'Congratulations! You will exceed your goal in savings. Keep up the excellent work and consider sharing your valuable tips with fellow users on our Forum page. Your insights can contribute to helping them achieve their financial goals.';
            const shareButton = document.createElement('button');
            shareButton.textContent = 'Go to Forum';
            shareButton.className = 'result-button';
            shareButton.addEventListener('click', function () {
                window.location.href = 'forum.html';
            });
            resultMessage.appendChild(document.createElement('br'));
            resultMessage.appendChild(shareButton);

        } else if (totalSavings === monthlyGoal) {
            resultMessage.textContent = 'You will save exactly your goal amount. Continue with your great job or increase your monthly goal to save more until the end of the month or in the next month.';
            const increaseGoalButton = document.createElement('button');
            increaseGoalButton.textContent = 'Set Higher Goal';
            increaseGoalButton.className = 'result-button';
            increaseGoalButton.addEventListener('click', function () {
                window.location.href = '../index.html';
            });
            resultMessage.appendChild(document.createElement('br'));
            resultMessage.appendChild(increaseGoalButton);

        } else {
            resultMessage.textContent = 'You will not save enough to reach your monthly goal. Try to figure out where you can save more money or where are you spending money unnecessarily. Find some tips in our app that can help you to achieve your goal.';
            const tipsButton = document.createElement('button');
            tipsButton.textContent = 'Explore our Tips';
            tipsButton.className = 'result-button';
            tipsButton.addEventListener('click', function () {
                window.location.href = 'tips.html';
            });
            resultMessage.appendChild(document.createElement('br'));
            resultMessage.appendChild(tipsButton);
        }
    });
});

