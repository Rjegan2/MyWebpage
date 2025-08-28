<?php
// submit_question.php
$servername = "localhost";  // If running locally via XAMPP/MAMP/WAMP
$username = "root";         // Default username (change if needed)
$password = "";             // Default password (change if needed)
$dbname = "webpage_questions";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get POST data from JS
$name = $_POST['name'];
$question = $_POST['question'];

// Insert into table
$sql = "INSERT INTO questions (name, question) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $name, $question);

if ($stmt->execute()) {
    echo "success";
} else {
    echo "error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>