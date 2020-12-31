const {Client, RichEmbed, MessageEmbed, MessageReaction} = require('discord.js');
const bot = new Client ();
const token = 'ENTER YOUR DISCORD BOT TOKEN';
const prefix = 'ENTER YOUR CUSTOM PREFIX HERE'; 

bot.on('ready', ()  =>{
    console.log("The Bot Is Now Active");
}); 

bot.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
        case "ENTER YOUR CUSTOM BOT COMMAND EXAMPLE !BOT (PREFIX+NAME)": 
            const Embed = new MessageEmbed()
            .setColor(0xffc300)
            .setTitle("ENTER YOUR TITLE")
            .setDescription("ENTER YOUR DESCRIPTION")
            if(!args[1]){
                message.channel.send(Embed);
                break;
            }
            let msgArgs = args.slice(1).join(" ");
            message.channel.send("‍⏲️ "  + "**" + msgArgs + "**" ).then(MessageReaction => { // ABLE TO REPLACE OR ADD CUSTOM REPLY TEXT/ CHANGE VISUALS
                MessageReaction.react("👍🏻");
                MessageReaction.react("👎🏻");
                message.delete().catch(console.error);
            });


            break;
    }
});


bot.login(token);
