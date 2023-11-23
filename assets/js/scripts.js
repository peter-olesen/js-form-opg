const formParent = document.getElementById('form-container');

const firstNameElement = document.getElementById('firstName');
const lastNameElement = document.getElementById('lastName');
const addressElement = document.getElementById('address');
const zipCodeElement = document.getElementById('zipCode');
const emailElement = document.getElementById('email');

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', (event) => {

// Prevent page reload on submit
event.preventDefault();

// Clears the console after submit
console.clear();

// Trim white space from name elements
let trimmedfirstName = firstNameElement.value.trim();
let trimmedlastName = lastNameElement.value.trim();
let trimmedAddress = addressElement.value.trim();

if (
    trimmedfirstName.length > 2 &&
    trimmedlastName.length > 2 &&
    trimmedAddress.length > 5 &&
    validateZipCode(zipCodeElement.value) &&
    validateEmail(emailElement.value)) {

    console.log('Formen er udfyldt korrekt');

    formParent.innerHTML = '<h2>Tak for tilmeldingen</h2>';

} else {

// First name evaluation
if (trimmedfirstName.length > 2) {
    console.log('Fornavn er OK');
    
} else {
    console.log('Fornavn er IKKE ok');
    firstNameElement.classList.toggle('error');
    }

// Last name validation
if (trimmedlastName.length > 2) {
    console.log('Efternavn er OK');

} else {
    console.log('Efternavn er IKKE ok');
    lastNameElement.classList.toggle('error');
}

// Address validation
if (trimmedAddress.length > 5) {
    console.log('Adresse er OK');

} else {
    console.log('Adresse er IKKE ok');
    addressElement.classList.toggle('error');
}

// Zip code validation
if (validateZipCode(zipCodeElement.value)) {
    console.log('Postnummer er OK');

} else {
    console.log('Postnummer er IKKE ok');
    zipCodeElement.classList.toggle('error');
    }

// Email validation
    if (validateEmail(emailElement.value)) {
    console.log('Email er OK');

} else {
    console.log('Email er IKKE ok');
    emailElement.classList.toggle('error');
}

}

});


// --- Functions below ---

// Validate zip code function
function validateZipCode(zipCodeElement) {
    // Regular expression for a zip code with exactly 4 digits
    let zipCodePattern = /^\d{4}$/;
  
    // Test the zip code against the pattern
    return zipCodePattern.test(zipCodeElement);
}


// Validate email function
function validateEmail(email) {
    // Definer en simpel regulær udtryk for email-validering
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test om emailen matcher det regulære udtryk
    let isValid = emailRegex.test(email);

    // Returner resultatet af valideringen (true eller false)
    return isValid;
}