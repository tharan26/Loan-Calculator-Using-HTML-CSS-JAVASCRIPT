document.getElementById('calculate-btn').addEventListener('click', function () {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const loanTenure = parseFloat(document.getElementById('loan-tenure').value) * 12;

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
        alert("Please enter valid numbers.");
        return;
    }

    // EMI Calculation using the formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
    const emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTenure)) / (Math.pow(1 + interestRate, loanTenure) - 1);
    const totalPayment = emi * loanTenure;
    const totalInterest = totalPayment - loanAmount;

    document.getElementById('emi-result').innerText = `₹${emi.toFixed(2)}`;
    document.getElementById('interest-result').innerText = `₹${totalInterest.toFixed(2)}`;
    document.getElementById('total-result').innerText = `₹${totalPayment.toFixed(2)}`;
});
