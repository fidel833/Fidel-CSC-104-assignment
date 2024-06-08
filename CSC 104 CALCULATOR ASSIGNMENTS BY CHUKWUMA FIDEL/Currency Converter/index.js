// Conversion rate as of May 2024: 1 USD = 1400 NGN
const usdToNgnRate = 1400;

function usdToNgn() {
  var amount = parseFloat(document.getElementById("amount").value);
  if (isNaN(amount)) {
    document.getElementById("result").innerHTML = "Please enter a valid amount.";
    return;
  }
  var convertedAmount = amount * usdToNgnRate;
  document.getElementById("result").innerHTML = amount + " USD equals " + convertedAmount.toFixed(2) + " NGN";
}

function ngnToUsd() {
  var amount = parseFloat(document.getElementById("amountNgn").value);
  if (isNaN(amount)) {
    document.getElementById("resultNgn").innerHTML = "Please enter a valid amount.";
    return;
  }
  var convertedAmount = amount / usdToNgnRate;
  document.getElementById("resultNgn").innerHTML = amount + " NGN equals " + convertedAmount.toFixed(2) + " USD";
}
