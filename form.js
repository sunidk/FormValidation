let name = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let password = document.getElementById("pwd");
let cPassword = document.getElementById("c-pwd");


function validateForm()
{
    if(name.value == "" || name.value == null)
    {
        alert("Name must be filled out");
        return false;
    }

    if(email.value == "" || email.value == null)
    {
        alert("Email is required");
        return false;
    }

    if(number.value == "" || number.value == null)
    {
        alert("Mobile number must be given");
        return false;
    }

    if(number.value.length != 10)
    {
        alert("Enter a valid mobile number");
        return false;
    }

    if(password.value == "" || password.value == null)
    {
        alert("Password should be created");
        return false;
    }

    if(password.value.length<6 || password.value.length>8)
    {
        alert("Password must be 6 to 8 characters");
        return false;
    }

    if( cPassword.value == "" || cPassword.value == null)
    {
        alert("Confirm your password");
        return false;
    }

    if(cPassword.value != password.value)
    {
        alert("Password doesn't match");
        return false;
    }
}