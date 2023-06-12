document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('name');
    const submitButton = document.getElementById('add-data');
    const outputDiv = document.getElementById('output');

    submitButton.addEventListener('click', function() {
        const inputValue = inputField.value;
        outputDiv.textContent = "Submitted data: " + inputValue;
        localStorage.setItem('name', inputValue)
        // Send message to background script
        chrome.runtime.sendMessage({ data: inputValue }, function(response) {
            console.log('Message sent to background script');
        });
    });
});
