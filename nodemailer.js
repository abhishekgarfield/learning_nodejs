var nodemailer=require('nodemailer');

var transporter= nodemailer.createTransport(
{
    
      
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: '',
          pass: '',
        },
      
});
var mailOptions={
    from:'abhishek2759@gmail',
    to:'swadhashree456@gmail.com',
    subject:'ilove yu',
    text: 'love uh jean'
};

transporter.sendMail(mailOptions ,function(err ,info)
{
    if(err)
    {
        throw err;
    }
    else{
        console.log("email sent"+ info.response);
    }
})