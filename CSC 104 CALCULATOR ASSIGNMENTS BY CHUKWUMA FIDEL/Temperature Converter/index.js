  function convertToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("celsius").value);
    if (isNaN(fahrenheit)) {
      document.getElementById("resultFahrenheit").innerHTML = "Please enter a valid temperature.";
      return;
    }
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("resultCelsius").innerHTML = celsius + "°C equals " + fahrenheit.toFixed(2) + "°F";
  }

  function convertToFahrenheit() {
    var celsius = parseFloat(document.getElementById("fahrenheit").value);
    if (isNaN(celsius)) {
      document.getElementById("resultCelsius").innerHTML = "Please enter a valid temperature.";
      return;
    }
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultFahrenheit").innerHTML = fahrenheit + "°F equals " + celsius.toFixed(2) + "°C";
  }
  