window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValues = {amount: 50000, years: 10, rate: 12};

  const loanAmountInput = document.getElementById("loan-amount");
  loanAmountInput.value = defaultValues.amount;
  const loanYearsInput = document.getElementById("loan-years");
  loanYearsInput.value = defaultValues.years;
  const loanRateInput = document.getElementById("loan-rate");
  loanRateInput.value = defaultValues.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

function isInputValueValid(i) {
  return i !== undefined && !isNaN(i);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  if(!isInputValueValid(values.amount) || !isInputValueValid(values.years) || !isInputValueValid(values.rate)) {
    throw("Invalid input!");
  }

  const p = values.amount; // Amount of Principle
  const i = values.rate / 100 / 12; // monthly interest rate (percentage)
  const n = Math.floor(values.years * 12); // total number of payments

  const monthlyPayment = (p * i) / (1 - Math.pow(1 + i, -n));

  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentDisplaySpan = document.getElementById("monthly-payment");
  monthlyPaymentDisplaySpan.innerText = "$" + monthly;
}