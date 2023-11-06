function getInputMoney(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputMoneyString = inputField.value;
    const inputMoney = parseFloat(inputMoneyString);
    inputField.value = "";
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
        alert("Please fill up the all input fields.");
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