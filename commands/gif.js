module.exports = {
    aliases: ['g'], // Optional
    category: 'Fun',
    description: 'Send a random gif',
    callback: async (message) => {
        message.delete();
        const fetch = require('node-fetch')
        let keywords = 'excited'
        let tokens = message.content.split(' ')

        if (tokens.length > 1) {
            keywords = tokens.slice(1, tokens.length).join("")
        }
        try {
            let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`
            let response = await fetch(url);
            let json = await response.json()
            const index = Math.floor(Math.random() * json.results.length)
            if (json.results[index].url) {
                message.channel.send(json.results[index].url)
                message.channel.send(`GIF Search term: ${keywords}`)
            }
        }
        catch {
            message.channel.send(`Invalid search term: ${keywords}`)
        }
    }
}
