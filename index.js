const {Client, RichEmbed, MessageEmbed, MessageReaction} = require('discord.js');
const bot = new Client ();
const token = 'NzkzOTAxNDY4NTg2OTk5OTE4.X-zAXA.rF2SvsgbrQkOVJZLqQrIrJRl7_g';
const prefix = '!';

bot.on('ready', ()  =>{
    console.log("The Bot Is Now Active");
}); 

bot.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
        case "sora":
            const Embed = new MessageEmbed()
            .setColor(0xffc300)
            .setTitle("Raiding Times")
            .setDescription("Use !sora + Message that you want to use for the poll")
            if(!args[1]){
                message.channel.send(Embed);
                break;
            }
            let msgArgs = args.slice(1).join(" ");
            message.channel.send("‍⏲️ "  + "**" + msgArgs + "**" ).then(MessageReaction => {
                MessageReaction.react("👍🏻");
                MessageReaction.react("👎🏻");
                message.delete().catch(console.error);
            });


            break;
    }
});


bot.login(token);