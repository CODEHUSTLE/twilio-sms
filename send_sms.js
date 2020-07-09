// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
require('dotenv').config();
const accountSid = 'ACe1da514974fcb9ea54c319d6d0f068c2';
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'This is CodeHustle knocking at your door!',
    from: '+19155294900',
    to: '+12102436778',
  })
  .then((message) => console.log(message.sid));
