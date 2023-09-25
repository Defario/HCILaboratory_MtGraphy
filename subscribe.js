var userName = document.getElementById("name")
var userEmail = document.getElementById("mail")
var userPhone = document.getElementById("phone")
var userDate = document.getElementById("date")
var userPass = document.getElementById("password")
var selectCountry = document.getElementById("country")
var agreement = document.getElementById("agree")

function submitData(){
    
    let userNameVal = userName.value
    if(userNameVal.length < 6){
        alert("Username must be more than 6 characters.")
        return false
    }

    let userEmailVal = userEmail.value 
    let cek = 0;
    for(let i=0; i<userEmailVal.length; i++){
        if(userEmailVal[i] == "@"){
            cek = 1;
            break;
        }
    }

    if(cek == 0){
        alert("You have entered an invalid email address!")
        return false
    }

    let userPhoneVal = userPhone.value
    if(userPhoneVal.length < 10){
        alert("Phone number must be more than 10 characters.")
        return false
    }

    let userDateVal = userDate.value
    if(userDateVal == ""){
        alert("You must fill user date of birth")
        return false
    }

    let userPassVal = userPass.value
    if(userPassVal.length < 8){
        alert("Password must be more than 8 characters.")
        return false
    }

    let country = selectCountry.options[selectCountry.selectedIndex].value
    if(country == ""){
        alert("Please choose a country!")
        return false
    }

    // let agree = agreement.value
    if(!agreement.checked){
        alert("You must check the terms and conditions agreement!")
        return false
    }
    
    e.preventDefault();
}