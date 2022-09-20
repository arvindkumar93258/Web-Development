

// Js file to handle the flow of programs
function validateFormInput() {
    // Get the value of the input field with id="formInputName"
    let name = document.getElementById("formInputName").value;

    //validating name here
    if (name == null || name == "") {
        alert("Name can't be null");
        return false;
    } else if (name.length < 3) {
        alert("Name length can not be less than 3");
        return false;
    }

    let email = document.getElementById("formInputEmail").value;

    if (formInputEmail.validateEmail(email) == false) {
        alert("Email is not valid");
    }



    let number = document.getElementById("formInputMobile").value;
    if (number.value == "") {
        alert("Error: Cell number must not be null.");
        //number.focus();
        return false;
    }

    if (number.length != 10) {
        alert("Phone number must be 10 digits.");
        //number.focus();
        return false;
    }

    let age = document.getElementById("formInputAge").value;
    if (age == undefined || age == "") {
        alert("Age can nt be null");
        return false;
    }
    else if (age < 3) {
        alert("Age can not be less than 3");
        return false;
    }


}


function validateEmail(value) {
    var input = document.createElement('input');

    input.type = 'email';
    input.required = true;
    input.value = value;

    return typeof input.checkValidity === 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(value);
}