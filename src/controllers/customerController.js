const customerModel = require("../models/customerModel");

const adminModel = require("../models/adminModel");



// Register customer api

const customer = async function (req, res) {

    try {

        let data = req.body;
        const { Email } = data;

        let uniqueEmail = await customerModel.findOne({ Email: Email })

        let unique_Email = await adminModel.findOne({ Email: Email })

        if (uniqueEmail || unique_Email) {
            return res.status(400).send({ status: false, mag: "This email already exist" })
        }

        const saveData = await customerModel.create(data)


        res.status(201).send({ status: true, message: "success", data: saveData })


    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

}


module.exports = { customer }