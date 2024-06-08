function calculateInterest() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);
    var compounding = document.getElementById("compounding").value;
  
    var n;
    switch (compounding) {
      case 'annually':
        n = 1;
        break;
      case 'semi-annually':
        n = 2;
        break;
      case 'quarterly':
        n = 4;
        break;
      case 'monthly':
        n = 12;
        break;
      default:
        n = 1;
    }
  
    var totalAmount = principal * Math.pow(1 + (rate / (100 * n)), n * time);
    var interest = totalAmount - principal;
  
    document.getElementById("result").innerHTML = "Compound Interest: $" + interest.toFixed(2) + "<br>Total Amount: $" + totalAmount.toFixed(2);
  }
  