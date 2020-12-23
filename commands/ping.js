// File name: "ping.js"
// Folder "./commands"

module.exports = {
    aliases: ['p'], // Optional
    category: 'Utiity',
    description: 'Just a ping command',
    callback: (message) => {
        message.delete();
        message.channel.send('pong')
    }
}
