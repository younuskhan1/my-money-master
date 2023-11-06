function getInputMoney(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputMoneyString = inputField.value;
    const inputMoney = parseFloat(inputMoneyString);
    // inputField.value = "";
    return inputMoney;
}

document.getElementById("calculate-button").addEventListener("click", function () {
    const monthlyTotalIncome = getInputMoney("input-income");
    const monthlyFoodExpenses = getInputMoney("input-food");
    const monthlyRentExpenses = getInputMoney("input-rent");
    const monthlyClothExpenses = getInputMoney("input-cloth");
    if ((monthlyTotalIncome < 0) || (monthlyFoodExpenses < 0) || (monthlyRentExpenses < 0) || (monthlyClothExpenses < 0)) {
        alert("Please provide positive values for all input fields.")
    } else if (isNaN(monthlyTotalIncome) || isNaN(monthlyFoodExpenses) || isNaN(monthlyRentExpenses) || isNaN(monthlyClothExpenses)) {
        alert("Please fill up the all input fields with positive numeric values.");
    } else {
        const totalMonthlyExpenses = monthlyFoodExpenses + monthlyRentExpenses + monthlyClothExpenses;
        if (monthlyTotalIncome < totalMonthlyExpenses) {
            alert("Monthly total expenses cannot be more than monthly total income.");
        } else {
            const monthlyRemainingBalance = monthlyTotalIncome - totalMonthlyExpenses;
            document.getElementById("total-expense-amount").innerText = totalMonthlyExpenses;
            document.getElementById("total-balance-amount").innerText = monthlyRemainingBalance;
        }
    }
})

function getBalanceAmount(balanceFieldId) {
    const balanceField = document.getElementById(balanceFieldId);
    const balanceString = balanceField.innerText;
    const balanceMoney = parseFloat(balanceString);
    return balanceMoney;
}
document.getElementById("saving-button").addEventListener("click", function () {
    const monthlyTotalIncome = getInputMoney("input-income");
    const remainingBalanceAfterExpenses = getBalanceAmount("total-balance-amount");
    const savingPercentage = getInputMoney("input-save");
    if (savingPercentage < 0 || isNaN(savingPercentage)) {
        alert("Please provide a positive numeric values");
    } else {
        const savingAmount = (monthlyTotalIncome * savingPercentage) / 100;
        const ultimateRemainingBalance = remainingBalanceAfterExpenses - savingAmount;
        if (ultimateRemainingBalance < 0) {
            alert("Please provide a reasonable percentage amount because saving amount cannot be more than remaining balance after expenses.")
        } else {
            document.getElementById("Saving Amount").innerText = savingAmount;
            document.getElementById("Remaining Balance").innerText = ultimateRemainingBalance;
        }
    }
})

document.getElementById("reset-button").addEventListener("click", function () {
    location.reload()
})