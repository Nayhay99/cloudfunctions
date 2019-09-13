const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors = require('cors')({origin: true});
app.use(cors);


app.get('/', (req, res) => {
    const date = new Date();
    const hours = (date.getHours() % 12) + 1; 
    res.send(`
      <!doctype html>
      <head>
        <title>Time</title>
        <link rel="stylesheet" href="/style.css">
        <script src="/script.js"></script>
      </head>
      <body>
        <p>In India, the clock strikes:
          <span id="bongs">${'BANG '.repeat(hours)}</span></p>
        <button onClick="refresh(this)">Refresh</button>
      </body>
    </html>`);
  });

app.get('/api', (req, res) => {
const date = new Date();
const hours = (date.getHours() % 12) + 1;  
res.json({bongs: 'bang '.repeat(hours)});
});
    
exports.app = functions.https.onRequest(app);
