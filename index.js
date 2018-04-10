const express = require('express');
const lirc_node = require('lirc_node');

const app = express();
lirc_node.init();


app.get('/aircon/on', function (req, res) {
  lirc_node.irsend.send_once("AirCon", "PowerOn", ()=> {
    res.send('エアコンON');
  });
})

app.get('/aircon/off', function (req, res) {
  lirc_node.irsend.send_once("AirCon", "PowerOff", ()=> {
    res.send('エアコンOFF');
  });
})

app.listen(3000);