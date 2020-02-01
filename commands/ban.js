const discord = require("discord.js")

module.exports.run = async (bot, message, arguments) => {

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));

    if (!banUser) return message.channel.send("Gebruiker niet gevonden.");

    var reason = arguments.join(" ").slice(22);

    if (!reason) return message.channel.send("Geef een reden op.");

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen staff leden kunnen dit.");

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je kan geen staff leden bannen.");

    var ban = new discord.RichEmbed()
        .setTitle("Ban")
        .setColor("ee0000")
        .addField("Gebruiker:", banUser)
        .addField("Moderator:", message.author)
        .addField("Reden:", reason)
        .addField("Tijd:", message.createdAt)
        .addField("Kanaal:", message.channel)


    var banChannel = message.guild.channels.find(`name`, "logs")
    if (!banChannel) return message.guild.send("Kan het kanaal **LOGS** niet vinden");

    message.guild.member(banUser).ban(reason);

    banChannel.send(ban)

    var banDm = new discord.RichEmbed()
        .setTitle("Ban")
        .setDescription(`Hey ${banUser}, Je bent gebant van de server.`)
        .setColor("#5454ff")
        .addField("Moderator:", message.author)
        .addField("Reden:", reason)
        .setFooter("Ban system");

    banUser.send(banDm);

    var channelBan = new discord.RichEmbed()
        .setTitle("Ban")
        .setDescription(`Hey ${message.author}, Je hebt: ${banUser} succesvol gebant!`)
        .setColor("43ff84")
        .setFooter("ban system")


    message.channel.send(channelBan).then(msg => msg.delete(5000));


    message.delete();


    return;

}

module.exports.help = {
    name: "ban"
}