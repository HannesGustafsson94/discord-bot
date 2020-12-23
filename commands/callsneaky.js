module.exports = {
    category: 'Utiity',
    description: 'Just a ping command',
    callback: (message) => {
        message.delete();
        let user = '<@97727050223198208>'
        message.channel.send(`COME HERE ${user}!!`)
    }
}
