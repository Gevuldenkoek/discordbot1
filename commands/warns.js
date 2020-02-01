const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));


module.exports.run = async (bot, message, args) => {

    // ?warn [user] [reason]

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen staff leden kunen dit");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Gebruiker niet gevonden.");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je kan geen staff leden warnen.");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Geef een reden op.");

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
    });


    var warnEmbed = new discord.RichEmbed()
        .setTitle("Warn")
        .setColor("ee1111")
        .addField("Gebruiker:", user)
        .addField("Moderator:", message.author)
        .addField("Kanaal:", message.channel)
        .addField("Tijd:", message.createdAt)
        .addField("Aantal warns:", warns[user.id].warns)
        .addField("Reden:", reason)
        .setFooter("Warn system")


    var warnChannel = message.guild.channels.find(`name`, "logs");
    if (!warnChannel) return message.channel.send("Maak het kanaal **logs** aan.");

    warnChannel.send(warnEmbed);

    var channelWarn = new discord.RichEmbed()
        .setTitle("Warn")
        .setColor("#ee6343")
        .setDescription(`Hey ${message.author}, Je hebt ${user} succesvol gewarned!`);

    message.channel.send(channelWarn).then(msg => msg.delete(5000));

    var warnDm = new discord.RichEmbed()
        .setTitle("Warn")
        .setColor("#ee6464")
        .setDescription(`hey ${user} je bent gewarned!`)
        .addField("Moderator:", message.author)
        .addField("Reden:", reason)
        .addField("Aantal warns:", warns[user.id].warns);

    user.send(warnDm)


    if (warns[user.id].warns == 5) {

        var warnbericht = new discord.RichEmbed()
            .setTitle(":warning: PAS OP!! :warning: ")
            .setDescription("Bericht voor: " + user)
            .setColor("#ee0000")
            .addField("Melding:", "Nog 1 warn je word verbannen!")
            .setFooter("Warn system")


        message.channel.send(warnbericht)
        message, author.send(warnbericht)

    } else if (warns[user.id] == 6) {

        message.guild.member(user).ban(reason);
        message.channel.send(`${user} is verbannen.`)


    }

    message.delete()





}

module.exports.help = {
    name: "warn"
}