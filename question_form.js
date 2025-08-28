/** document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const question = document.getElementById('question').value; // Get the value from the textarea
    document.getElementById('response').innerText = `Message Submitted`; // Display the message

    
    document.getElementById('message').value = '';
});
**/


document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const question = document.getElementById('question').value;

    // Send data to PHP backend
    fetch('submit_question.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${encodeURIComponent(name)}&question=${encodeURIComponent(question)}`
    })
    .then(response => response.text())
    .then(data => {
        if (data === "success") {
            document.getElementById('response').innerText = "Message Submitted ✅";
        } else {
            document.getElementById('response').innerText = "Error submitting ❌: " + data;
        }
    })
    .catch(error => {
        document.getElementById('response').innerText = "Request failed: " + error;
    });

    // Reset form fields
    document.getElementById('name').value = '';
    document.getElementById('question').value = '';
});




    
