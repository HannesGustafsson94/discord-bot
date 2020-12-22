const Discord = require('discord.js');
// const client = new Discord.Client();
const DiscordJS = require('discord.js')
const fetch = require('node-fetch');
const wokcommands = require('wokcommands')
require('dotenv').config();

const client = new DiscordJS.Client({
    partials: ['MESSAGE', 'REACTION'],
  })

client.login(process.env.BOTTOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    new wokcommands(client, 'commands', 'features')
    .setDefaultPrefix('!')
});
