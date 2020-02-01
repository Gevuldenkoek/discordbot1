const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen staff leden kunnen dit..").then(msg => msg.delete(3000));
    var bericht = args.join(" ");
    message.delete().catch();
    message.channel.send("Loading..").then(msg => msg.delete(50)).then(message.channel.send(bericht));
    

}

module.exports.help = {
    name: "say"
}