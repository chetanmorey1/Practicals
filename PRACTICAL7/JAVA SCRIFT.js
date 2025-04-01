function validateForm() {
return (
validateFirstName() &&
validateLastName() &&
validatePassword() &&
validateEmail() &&
validateMobile() &&
validateAddress()
);}
function validateFirstName() {
const firstName = document.getElementById("firstName");
const firstNameError = document.getElementById("firstNameError");
const nameRegex = /^[A-Za-z]{6,}$/;
if (!nameRegex.test(firstName.value)) {
firstNameError.textContent = "First name must be at least 6 letters and contain only alphabets.";
return false;}
else {
firstNameError.textContent = "";
return true;}}
function validateLastName() {
const lastName = document.getElementById("lastName");
const lastNameError = document.getElementById("lastNameError");
if (lastName.value.trim() === "") {
lastNameError.textContent = "Last name is required.";
return false;}
else {
lastNameError.textContent = "";
return true;}}
function validatePassword() {
const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
if (!passwordRegex.test(password.value)) {
passwordError.textContent = "Password must be at least 6 characters and include uppercase, lowercase, numbers, and special characters.";
return false;}
else {
passwordError.textContent = "";
return true;}}
function validateEmail() {
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (!emailRegex.test(email.value)) {
emailError.textContent = "Invalid email format.";
return false;}
else {
emailError.textContent = "";
return true;}}
function validateMobile() {
const mobile = document.getElementById("mobile");
const mobileError = document.getElementById("mobileError");
const mobileRegex = /^\+?\d{1,3}[-.\s]?\d{10}$/;
if (!mobileRegex.test(mobile.value)) {
mobileError.textContent = "Invalid mobile number. Use format: +91-1234567890.";
return false;}
else {
mobileError.textContent = "";
return true;}}
function validateAddress() {
const address = document.getElementById("address");
const addressError = document.getElementById("addressError");
if (address.value.trim() === "") {
addressError.textContent = "Address is required.";
return false;}
else {
addressError.textContent = "";
return true;}}