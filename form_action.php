<?php
    $name = $_POST['name'];
	$company = $_POST['company'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = "From: <callback@{$_SERVER['HTTP_HOST']}>\r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=\"utf-8\"";
    $to = 'svjatoslav.romanjuk@gmail.com'; 
    $subject = 'From Transreysan';
    $body = "From: $name\n Company: $company\n Phone: $phone\n E-Mail: $email\n Message:\n $message";
  

?>

<?php
if ($_POST['send_message']) {
    if (mail ($to, $subject, $body, $headers)) { 
        echo '<p>Your message has been sent!</p>';
    } else { 
        echo '<p>Something went wrong, go back and try again!</p>'; 
    }
}
?>
