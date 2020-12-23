module.exports = {
    category: 'Utiity',
    description: 'Just a ping command',
    callback: (message) => {
        message.delete();
        let user = '<@245255028401504256>'
        message.channel.send(`COME HERE ${user}!!`)
    }
}
