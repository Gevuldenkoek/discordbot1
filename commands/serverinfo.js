const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    var icon = message.guild.iconUrl;

    var serverEmbed = new discord.RichEmbed()
    .setTitle("Server info")
    .setColor("#92ff75")
    .setThumbnail(icon)
    .addField("Gejoind op:", message.member.joinedAt)
    .addField("Account gemaakt op:", message.member.CreatedAt)
    .addField("Aantal members", message.guild.memberCount)
    .setFooter("Server info");

    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}