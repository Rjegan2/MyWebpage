document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const message = document.getElementById('message').value; // Get the value from the textarea
    document.getElementById('response').innerText = `Message Submitted`; // Display the message

    
    document.getElementById('message').value = '';
});