function handleConvert() {
  const tempInput = document.getElementById("inputTemp").value.trim();
  const fromUnit = document.getElementById("unitFrom").value;
  const toUnit = document.getElementById("unitTo").value;
  const resultDiv = document.getElementById("displayResult");

  // Check empty or non-number input
  if (tempInput === "" || isNaN(tempInput)) {
    resultDiv.textContent = "Please enter a valid temperature value!";
    return;
  }

  const input = parseFloat(tempInput);
  let tempC;

  // Step 1: Convert to Celsius
  switch (fromUnit) {
    case "c":
      tempC = input;
      break;
    case "f":
      tempC = (input - 32) * 5 / 9;
      break;
    case "k":
      tempC = input - 273.15;
      break;
    default:
      resultDiv.textContent = "Invalid source unit!";
      return;
  }

  // Step 2: Convert from Celsius to target
  let converted;
  switch (toUnit) {
    case "c":
      converted = tempC;
      break;
    case "f":
      converted = (tempC * 9 / 5) + 32;
      break;
    case "k":
      converted = tempC + 273.15;
      break;
    default:
      resultDiv.textContent = "Invalid target unit!";
      return;
  }

  const symbols = {
    c: "°C",
    f: "°F",
    k: "K"
  };

  if (fromUnit === toUnit) {
    resultDiv.textContent = `Same units selected. No conversion needed. Still: ${converted.toFixed(2)}${symbols[toUnit]}`;
  } else {
    resultDiv.textContent = `${input}${symbols[fromUnit]} = ${converted.toFixed(2)}${symbols[toUnit]}`;
  }
}
