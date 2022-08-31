import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  console.log({processEnv: process.env.SENDGRID_API_KEY})
  try {
    await sendgrid.send({
      to: "jbzuloaga@gmail.com", // Your email where you'll receive emails
      from: `${req.body.email}`, // your website email address here
      subject: `${req.body.subject}`,
      html: `${req.body.message}`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;