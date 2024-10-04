function displayResult() {
    // Get the values from input fields
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);

    // Ensure both inputs have valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        let sum = num1 + num2;
        document.getElementById('result').innerText = `Result: ${sum}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers!';
    }
}
