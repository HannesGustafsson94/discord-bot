module.exports = {
    aliases: ['sneaky'], // Optional
    category: 'Utiity',
    description: 'Just why',
    callback: (message) => {
        message.delete();
        message.channel.send('Fight me! Mooo!')
    }
}
