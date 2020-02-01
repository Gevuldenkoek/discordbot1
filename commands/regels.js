const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    try {

        var help = new discord.RichEmbed()
        .setTitle("Regels:")
        .setColor("53ee73")
        .setDescription("_SOON_")
        .setFooter(`${bot.user.username} regels`);

        message.author.send(help);

        message.channel.send("Regels staan in je DM").then(m => message.delete(5000));



    } catch (error) {
        message.channel.send("Er is een error")
    }
    

}

module.exports.help = {
    name: "regels"
}