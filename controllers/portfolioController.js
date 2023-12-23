const sendEmailController = () => {
    try{
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