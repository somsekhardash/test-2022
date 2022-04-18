const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    console.log('Client is ready!');
});

client.on('message', msg => {
    console.log(msg);
    // if (msg.body == 'hi') {
    //   msg.reply('I Love You');
    // }
    // if (msg.body == 'i am sorry') {
    //     msg.reply('no i am sorry');
    // }
    // if (msg.body == 'good morning') {
    //     msg.reply('no morning is good without talking to you');
    // }
    // if (msg.body == 'soi pad') {
    //     msg.reply('nahi buli jiba chala');
    // }
    // if (msg.body == 'missed you') {
    //     msg.reply('i missed you more');
    // }
});

client.initialize();