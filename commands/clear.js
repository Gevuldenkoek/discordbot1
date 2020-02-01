const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    // !clear [aantal]
    //Bot: [aantal] berichten verwijderd 

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen staff leden kunnen dit.")

    if (!args[0]) return message.reply("Geef een aantal op.");

    if (Number.isInteger(parseInt(args[0]))){

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => { 

            if(args[0] == 0){

                message.channel.send("Ik kan geen 0 berichten verwijderen.").then(msg => msg.delete(3000));

            }else if (args[0] == 1){

                message.channel.send("Ik heb 1 bericht verwijderd.").then(msg => msg.delete(3000));

            } else {
                message.channel.send(`${args[0]} berichten verwijderd.`).then(msg => msg.delete(3000));
            }

        });        

    } else {
        return message.channel.send("Geef een aantal op.")
    }


    

}

module.exports.help = {
    name: "clear"
}