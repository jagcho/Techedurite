const express = require("express")
const mongoose = require("mongoose")
const route = require("./routes/route")
const app = express()

app.use(express.json())

mongoose.set('strictQuery', false);

const URL = "mongodb+srv://Jagcho:71nEXJtXcYfVx8T6@cluster0.5bg4mzz.mongodb.net/Techedurite"
mongoose.connect(URL, { useNewUrlParser: true }).then(() => {
    console.log("Mongodb is connected")
}).catch((err) => {
    console.log(err)
})

app.use("/", route)

app.listen(process.env.PORT || 3000, () => {
    console.log("express server is running on " + (3000 || process.env.PORT))
})