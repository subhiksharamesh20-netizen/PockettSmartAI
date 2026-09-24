function calculateBudget() {
    let income = Number(document.getElementById("income").value);
    let expenses = Number(document.getElementById("expenses").value);

    if (income <= 0 || expenses < 0) {
        document.getElementById("result").innerHTML =
            "Please enter valid amounts.";
        return;
    }

    let balance = income - expenses;

    let message;

    if (balance > 0) {
        message = "Great! You have money left for saving.";
    } else if (balance === 0) {
        message = "Your income and expenses are equal