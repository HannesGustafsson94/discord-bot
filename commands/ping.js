// File name: "ping.js"
// Folder "./commands"

module.exports = {
    aliases: ['p'], // Optional
    category: 'Utiity',
    description: 'Just a ping command',
    callback: (message) => {
        message.channel.delete(500);
        message.channel.send('pong')
    }
}