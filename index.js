function getInputMoney(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputMoneyString = inputField.value;
    const inputMoney = parseFloat(inputMoneyString);
    inputField.value = "";
    return inputMoney;
}

// declare a global variable of monthlyTotalIncome to get
//  the value from outside to reuse the value in 
// saving button and we can empty the input field in this way.

let monthlyTotalIncome;
console.log(monthlyTotalIncome);

// when I click the calculation button then the monthlyTotalIncome global
// variable is reassigned/updated but It does not show it's updated value because
//  it is placed outside of calculation button's event handler.
// you can see the scope in javascript at the khata of conceptual session - 2nd of 6th batch.


document.getElementById("calculate-button").addEventListener("click", function () {
    monthlyTotalIncome = getInputMoney("input-income");
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
    // second option to get the value of monthlyTotalIncome by using
    //  a function but we cannot empty the input field in this way.
    // not 53 no line code but this way >>> (const monthlyTotalIncome = getInputMoney("input-income");)
    const remainingBalanceAfterExpenses = getBalanceAmount("total-balance-amount");

    //  first and the best option to get the value of monthlyTotalIncome from 
    // global variable and we can empty the input field in this way.
    // Reused here the monthlyTotalIncome global variable efficiently.
    const savingPercentage = getInputMoney("input-save");
    if (isNaN(remainingBalanceAfterExpenses)) {
        alert("You have to fill up the above form completely at first.");
    } else {
        const monthlyIncome = monthlyTotalIncome;
        console.log(monthlyIncome);
        if (savingPercentage < 0 || isNaN(savingPercentage)) {
            alert("Please provide a positive numeric values at percentage input field.");
        } else {
            const savingAmount = (monthlyIncome * savingPercentage) / 100;
            const ultimateRemainingBalance = remainingBalanceAfterExpenses - savingAmount;
            if (ultimateRemainingBalance < 0) {
                alert("Please provide a reasonable percentage amount because saving amount cannot be more than remaining balance after expenses.")
            } else {
                document.getElementById("Saving Amount").innerText = savingAmount;
                document.getElementById("Remaining Balance").innerText = ultimateRemainingBalance;
            }
        }
    }

})

document.getElementById("reset-button").addEventListener("click", function () {
    location.reload();
})