//Submit form 
function formSubmit() {
    if (!isOneFieldFilled(getUsernameElement())) {
        let usernameMessage = "Username is required"
        errorMessage(getErrorTextUsername(), usernameMessage);
        redBorber(getUsernameElement());
        return false;
    }
    if (!isOneFieldFilled(getEmailElement())) {
        let emailMessage = "Email is required"
        errorMessage(getErrorTextEmail(), emailMessage);
        redBorber(getEmailElement());
        return false;
    }
    if (!isOneFieldFilled(getPasswordElement())) {
        let passwordMessage = "Password is required"
        errorMessage(getErrorTextPassword(), passwordMessage);
        redBorber(getPasswordElement());
        return false;
    }

    if (!isElementGreaterThan7(getUsernameElement())) {
        let graterThanMessage = "Minimum 8 characters"
        errorMessage(getErrorTextUsername(), graterThanMessage);
        redBorber(getUsernameElement());
        return false;
    }

    if (!isElementLessThan13(getUsernameElement())) {
        let lessThanMessage = "Maximum 12 characters"
        errorMessage(getErrorTextUsername(), lessThanMessage);
        redBorber(getUsernameElement());
        return false;
    }
    
    if (!isRegexEmail(getEmailElement())) {
        let regexEmailMessage = "Invalid email format"
        errorMessage(getErrorTextEmail(), regexEmailMessage);
        redBorber(getEmailElement());
        return false;
    }
    
    if (!isRegexPassword(getPasswordElement())) {
        let regexPasswordMessage = "Password requires minimum 8 characters, maximum 12 characaters, at least one uppercase character, one lowercase character, one number and one symbol"
        errorMessage(getErrorTextPassword(), regexPasswordMessage);
        redBorber(getUsernameElement());
        return false;
    }
    return true;
}


//Section of all checks

//Check for filled fields
function isOneFieldFilled(inputElement) {
    if (inputElement.value == "") {
        return false;
    }
    return true;
}

//Check for element length greater than 7 
function isElementGreaterThan7(inputElement) {
    if (inputElement.value.length < 8) {
        return false;
    }
    return true;  
}

//Check for element length less than 13
function isElementLessThan13(inputElement) {
    if (inputElement.value.length > 12) {
        return false;
    }
    return true;  
}

//Check Regular Expression email
function isRegexEmail(inputElement) {
    let emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputElement.value.match(emailformat)) {
        return true;
    }
    return false;
}

//Check Regular Expression password
function isRegexPassword(inputElement) {
    let passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/;
    if (inputElement.value.match(passwordformat)) {
        return true;
    }
    return false;
}


//Section of error handling

//Generate red border
function redBorber(inputElement) {
    inputElement.setAttribute("class", "input-error");
}

//Generate error message
function errorMessage(errorText, message) {
    errorText.innerHTML = message;
}

//Turn off error
function turnOffError(errorText, inputElement) {
    errorText.innerHTML = "";
    inputElement.setAttribute("class", "inputfield_style")
}


// Section of the turn off of the error messages when the input field changes

//Get of listening to the "change" event in the input fields
document.getElementById("username").addEventListener("change", turnOffErrorUsername);
document.getElementById("email").addEventListener("change", turnOffErrorEmail);
document.getElementById("password").addEventListener("change", turnOffErrorPassword);

//Turn off error messages when the input fields are no longer empty
function turnOffErrorUsername() {
    turnOffError(getErrorTextUsername(), getUsernameElement());
}

function turnOffErrorEmail(){
    turnOffError(getErrorTextEmail(), getEmailElement());
}

function turnOffErrorPassword() {
    turnOffError(getErrorTextPassword(), getPasswordElement());
}


//section of the elements get from the html document

//Get input elements from html document
function getUsernameElement() {
    return document.getElementById("username");
}

function getEmailElement() {
    return document.getElementById("email");
}

function getPasswordElement() {
    return document.getElementById("password");
}

//Get error text elements from html document
function getErrorTextUsername() {
    return document.getElementById("error-text-username")  
}

function getErrorTextEmail() {
    return document.getElementById("error-text-email")
}

function getErrorTextPassword() {
    return document.getElementById("error-text-password")
}



