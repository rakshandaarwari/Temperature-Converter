function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;

    let result;

    if (isNaN(inputTemperature)) {
        document.getElementById("result").innerText = "Please enter a valid number!";
        return;
    }

    if (inputUnit === outputUnit) {
        result = inputTemperature;
    } else if (inputUnit === "Celsius") {
        result = outputUnit === "Fahrenheit"
            ? (inputTemperature * 9/5) + 32
            : inputTemperature + 273.15;
    } else if (inputUnit === "Fahrenheit") {
        result = outputUnit === "Celsius"
            ? (inputTemperature - 32) * 5/9
            : ((inputTemperature - 32) * 5/9) + 273.15;
    } else if (inputUnit === "Kelvin") {
        result = outputUnit === "Celsius"
            ? inputTemperature - 273.15
            : (inputTemperature - 273.15) * 9/5 + 32;
    }

    document.getElementById("result").innerText = `Result: ${result.toFixed(2)} ${outputUnit}`;
}
