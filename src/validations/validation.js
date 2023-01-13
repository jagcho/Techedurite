function isValidBody(data){
    return Object.keys(data).length!=0
}

function isValidstring(str){
    return (/^[a-zA-Z]*$/.test(str.trim()))
}

function isValidEmail(Email){
    return (/^([0-9a-z]([-_\\.]*[0-9a-z]+)*)@([a-z]([-_\\.]*[a-z]+)*)[\\.]([a-z]{2,9})+$/.test(Email))
}


function isValidPassword(Password){
    return (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/.test(Password))

}

module.exports = {isValidBody, isValidstring, isValidEmail, isValidPassword}