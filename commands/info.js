const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarUrl;

    var infoEmbed = new discord.RichEmbed()
    .setTitle("Bot info")
    .setColor("#63ff67")
    .setThumbnail(botIcon)
    .addField("Gemaakt door:", "Chris.071_#0001")
    .addField("Gemaakt op:", bot.user.createdAt)
    .setFooter(`Info over: ${bot.user.username}`);

    return message.channel.send(infoEmbed);

}

module.exports.help = {
    name: "botinfo"
}