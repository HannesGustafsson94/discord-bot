module.exports = {
    aliases: ['sneaky'], // Optional
    category: 'Utiity',
    description: 'Just why',
    callback: (message) => {
        message.channel.delete(500);
        message.channel.send('Fight me! Mooo!')
    }
}
