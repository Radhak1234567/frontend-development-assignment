document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get input values
    const numberInput = parseInt(document.getElementById('numberInput').value); // Convert to number
    const passwordInput = document.getElementById('passwordInput').value;
    const resultMessage = document.getElementById('resultMessage');

    // Check if number is less than 10 and password is less than 6 characters
    if (numberInput < 10 || passwordInput.length < 6) {
        resultMessage.textContent = "Failure: Input value is below the minimum required!";
        resultMessage.className = 'message failure'; // Red text
        resultMessage.style.display = 'block';
    } else {
        resultMessage.textContent = "Success: Input values are valid!";
        resultMessage.className = 'message success'; // Green text
        resultMessage.style.display = 'block';
    }
});
