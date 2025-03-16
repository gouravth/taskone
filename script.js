function convertTemperature() {
    let tempValue = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unitSelect").value;

    if (isNaN(tempValue)) {
        alert("Please enter a valid number!");
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "Celsius") {
        celsius = tempValue;
        fahrenheit = (tempValue * 9/5) + 32;
        kelvin = tempValue + 273.15;
    } else if (unit === "Fahrenheit") {
        celsius = (tempValue - 32) * 5/9;
        fahrenheit = tempValue;
        kelvin = celsius + 273.15;
    } else if (unit === "Kelvin") {
        celsius = tempValue - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = tempValue;
    }

    document.getElementById("celsius").innerText = `Celsius: ${celsius.toFixed(2)}°C`;
    document.getElementById("fahrenheit").innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    document.getElementById("kelvin").innerText = `Kelvin: ${kelvin.toFixed(2)} K`;
}
