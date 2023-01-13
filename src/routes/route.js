const express = require('express')

const router = express.Router()

const { admin, adminLogin } = require('../controllers/adminController')
const { customer } = require('../controllers/customerController')
const { commonValidation } = require('../middlewares/commonValidation')



// Routes 
router.post('/customer_Registration', commonValidation, customer)
router.post('/admin_Registration', commonValidation, admin)
router.post('/admin_Login', adminLogin)




module.exports = router