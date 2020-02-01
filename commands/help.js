const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    try {

        var help = new discord.RichEmbed()
        .setTitle("Commands:")
        .setColor("53ee73")
        .setDescription("**Algemene commands** \n\n ?hallo - Stuurt hallo terug. \n ?help - Stuurt dit bericht. \n ?serverinfo - stuurt info over de server. \n ?botinfo - Stuurt info over de bot. \n Meer komt nog. \n\n  **Ticket commands** \n _Komt nog_ \n\n**Staff commands** \n\n ?kick [user] [reason] - Kick een gebruiker. \n ?ban [user] [reason] - Ban een gebruiker. \n (Ban & kick komt een support ID bij.) \n\n **Meer commands komen nog.**")
        .setFooter(`${bot.user.username} commands`);

        

        return message.channel.send("Loading..").then(msg => msg.delete(100)).then(message.channel.send("De commands staan in je DM.")).then(message.author.send(help));



    } catch (error) {
        message.channel.send("Er is een error")
    }

    

}

module.exports.help = {
    name: "help"
}