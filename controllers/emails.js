import emailjs from '@emailjs/browser';

const publicKey = `${process.env.EMAIL_PUBLIC_KEY}`
const serviceId = `${process.env.EMAIL_SERVICE_ID}`
const templateId = `${process.env.EMAIL_TEMPLATE_ID}`


const sendEmail = (req, res) => {
  console.log(req.body)
  emailjs.sendForm(
    serviceId,
    templateId,
    req.body,
    publicKey,
  ).then(
    // result => console.log(result.text),
    // error => console.log(error)
    res.result
  )
}

export {
  sendEmail
}
