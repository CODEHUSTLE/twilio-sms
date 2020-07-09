const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message(`The CodeHustlers are coming! Grab you IDE's 💻! `);

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

http.createServer(app).listen(4200, () => {
  console.log('Express server listening on port 4200');
});
