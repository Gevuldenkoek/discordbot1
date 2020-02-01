const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Loading..").then(msg => msg.delete(50)).then(message.channel.send("Hey!"));


}


module.exports.help = {
    name: "hallo"
}