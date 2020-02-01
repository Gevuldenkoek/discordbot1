const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Gebruiker niet gevonden.").then(m => message.delete(5000));

    var reason = arguments.join(" ").slice(22); 

    if (!reason) return message.channel.send("Geef een text op.");

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen staff leden kunnen dit.");

    var dm = new discord.RichEmbed()
    .setTitle("Je hebt een DM ontvangen.")
    .setColor("ee0000")
    .addField("Bericht:", reason)
 
    message.user.send(dm)



}

module.exports.help = {
    name: "33cc33"
}