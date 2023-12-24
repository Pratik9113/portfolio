const nodemailer = require("nodemailer")
const sendGridTransport = require('nodemailer-sendgrid-transport')

// transport
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth:{
            api_key: process.env.API_SENDGRID,
        },
    })
)
const sendEmailController = () => {
    try{
        const {name,email,msg} = req.body 
         // validation
         if(!name || !email || !msg){
            return res.status(500).send({
                success:false,
                message:'please provide all field',
            })
         }

         // email matter 
         transporter.sendMail({
            to:'pratik.patil9113@gmail.com',
            from : 'pratik.patil9113@gmail.com',
            subject :'Regarding portfolio',
            html:`
                    <h5>Details Information</h5>
                    <ul>
                        <li><p>Name : ${name}</p></li>
                        <li><p>Email : ${email}</p></li>
                        <li><p>MSg : ${msg}</p></li>
                    </ul>
            `
         })
        return res.status(200).send({
            success:true,
            message: "your message is send "
        })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'send Email API Error',
            error 
        })
    }
}
module.exports = {sendEmailController};