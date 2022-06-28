const express = require('express');
const path = require('path');
const app = express();

const asset = require("./assets.json")

asset.css.forEach((e)=>{
  app.get(e,(req,res)=>{
    res.sendFile(__dirname + e)
  })
})
asset.js.forEach((e)=>{
  app.get(e,(req,res)=>{
    res.sendFile(__dirname + e)
  })
})

const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
};
app.use(express.static('./index.html'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(forceSSL());

app.listen(process.env.PORT || 3000);