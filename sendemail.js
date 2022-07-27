var nodemailer=require("nodemailer");
const SMTPConnection = require("nodemailer/lib/smtp-connection");

var transporter= nodemailer.createTransport({

    host:"smtp.gmail.com",
    secure:true,
    port:465,
    auth:{
        user:"",
        pass:"",
    },


});

var mailOptions={
    from:"abhishek2759@gmail.com",
    to:"swadhashree456@gmail.com",
    subject:"testing emails",
    text:"hi jean sup sending ua node js email"
};

transporter.sendMail(mailOptions,function(err,info)
{
    if (err) throw err;
    console.log(info.response);
})


