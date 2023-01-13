const {isValidBody,isValidstring,isValidEmail,isValidPassword} = require('../validations/validation')




const commonValidation=  function(req,res,next){
try{
    let data=req.body;

const {First_Name,Last_Name,Email,Password} = data


if(!isValidBody(data)){
    return res.status(400).send({status:false,message:"provide valid input"})
}

if(!First_Name){
    return res.status(400).send({ status: false, message: " First_Name is required" })
}

if(!isValidstring(First_Name)){
    return res.status(400).send({ status: false, message: " First_Name is invalid" })
}

if(!isValidstring(Last_Name)){
    return res.status(400).send({ status: false, message: " Last_Name is invalid" })
}

if(!Email){
    return res.status(400).send({ status: false, message: "Email is required" })
}

if(!isValidEmail(Email)){
    return res.status(400).send({status:false,message:"Enter valid Email "})
}



if(!Password){
    return res.status(400).send({ status: false, message: "Password is required" })
}

if(!isValidPassword(Password)){
    return res.status(400).send({ status: false, message: "Enter Valid Password [min length 8 and max length 15]" })
}

next()

}
catch (err) {
    return res.status(500).send({ status: false, message: err.message })
}
}

module.exports={commonValidation}