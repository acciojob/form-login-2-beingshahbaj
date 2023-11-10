//your JS code here. If required.
document.getElementById("form").addEventListener("submit", function(event){
 event.preventDefault(); 
 var firstname = document.getElementById("fname").value;
 var lastname = document.getElementById("lname").value;
 var phonenumber = document.getElementById("phone").value;
 var emailid = document.getElementById("email").value;

 alert("First Name: " + firstname + "\nLast Name: " + lastname + "\nPhone Number: " + phonenumber + "\nEmail ID: " + emailid);
});