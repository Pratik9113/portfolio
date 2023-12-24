const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

// dotenv configuation
dotenv.config()
// rest object
const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// routes
// app.get('/' , (req,res)=>{
//     res.send(`<h1>welcome to node server </h1>`);
// })
app.use('/api/v1/portfolio', require('./routes/portfolioRoute.js'));

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT,()=>{
    console.log(`server Running on PORT ${PORT}`);
});



// 