function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusInput = document.getElementById("celsius");
    var result = document.getElementById("result");

    if (fahrenheitInput.value) {
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = (fahrenheit - 32) * 5 / 9;
      celsiusInput.value = celsius.toFixed(2);
      result.innerHTML = fahrenheit + "°F is " + celsius.toFixed(2) + "°C";
    }
  }

  function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var result = document.getElementById("result");

    if (celsiusInput.value) {
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = (celsius * 9 / 5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
      result.innerHTML = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";
    }
  }