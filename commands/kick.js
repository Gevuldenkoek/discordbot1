const discord = require("discord.js")

module.exports.run = async (bot, message, arguments) => {

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));

    if (!kickUser) return message.channel.send("Gebruiker niet gevonden.");

    var reason = arguments.join(" ").slice(22);

    if (!reason) return message.channel.send("Geef een reden op.");

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen staff leden kunnen dit.");

    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je kan geen staff leden kicken.");

    var kick = new discord.RichEmbed()
        .setTitle("Kick")
        .setColor("ee0000")
        .addField("Gebruiker:", kickUser)
        .addField("Moderator:", message.author)
        .addField("Reden:", reason)
        .addField("Tijd:", message.createdAt)
        .addField("Kanaal:", message.channel)


    var kickChannel = message.guild.channels.find(`name`, "logs")
    if (!kickChannel) return message.guild.send("Kan het kanaal **LOGS** niet vinden");

    message.guild.member(kickUser).kick(reason);

    kickChannel.send(kick)

    var kickDm = new discord.RichEmbed()
        .setTitle("Kick")
        .setDescription(`Hey ${kickUser}, Je bent gekickt van de server.`)
        .setColor("#5454ff")
        .addField("Moderator:", message.author)
        .addField("Reden:", reason)
        .setFooter("Kick system");

    kickUser.send(kickDm).then(kickUser.send("Als je weer wilt joinen, Invite link: https://discord.gg/u9JkkqJ"))

    var channelKick = new discord.RichEmbed()
        .setTitle("Kick")
        .setDescription(`Hey ${message.author}, Je hebt: ${kickUser} succesvol gekickt!`)
        .setColor("43ff84")
        .setFooter("Kick system")


    message.channel.send(channelKick).then(msg => msg.delete(5000));


    message.delete();


    return;

}

module.exports.help = {
    name: "kick"
}