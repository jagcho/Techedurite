const adminModel = require("../models/adminModel");
const customerModel = require("../models/customerModel");
const { isValidEmail, isValidPassword } = require("../validations/validation")


const admin = async function (req, res) {

    try {

        let data = req.body;

        const { Email } = data;

        let uniqueEmail = await adminModel.findOne({ Email: Email })

        let unique_Email = await customerModel.findOne({ Email: Email })

        if (uniqueEmail || unique_Email) {
            return res.status(400).send({ status: false, mag: "This email already exist" })
        }

        const saveData = await adminModel.create(data)

        return res.status(201).send({ status: true, message: "success", data: saveData })

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }



}


const adminLogin = async function (req, res) {

    try {
        let data = req.body

        const { Email, Password } = data

        if (!Email) {
            return res.status(400).send({ status: false, message: "Email is required" })
        }

        if (!isValidEmail(Email)) {
            return res.status(400).send({ status: false, message: "Enter valid Email" })
        }

        if (!Password) {
            return res.status(400).send({ status: false, message: "Password is required" })
        }

        if (!isValidPassword(Password)) {
            return res.status(400).send({ status: false, message: "Enter Valid Password [min length 8 and max length 15]" })
        }

        const checkCustomer = await customerModel.findOne({ Email: Email, Password: Password })

        if (checkCustomer) {
            return res.status(400).send({ status: false, message: "You are not allowed to login from here" })
        }


        const checkAdmin = await adminModel.findOne({ Email: Email, Password: Password })

        if (!checkAdmin) {
            return res.status(404).send({ status: false, message: "create admin account" })
        }

        return res.status(200).send({ status: true, message: "Login  successfull" })

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

}

module.exports = { admin, adminLogin }