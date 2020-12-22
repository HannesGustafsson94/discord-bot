module.exports = {
    aliases: ['kunst', 'kunstpause', 'kunstalainen'], // Optional
    category: 'Utiity',
    description: 'Just why',
    callback: (message) => {
        message.channel.delete(500);
        message.channel.send('https://tenor.com/view/hyouka-kyo-ani-chitanda-eru-onsen-gif-5047014')
        message.channel.send('Queen of oppais!')
    }
}
