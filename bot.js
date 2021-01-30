const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {
       //message.reply('You have reached a new level! pong');
       message.channel.send('You have reached a new level! pong');
       // Advanced Reply: https://stackoverflow.com/a/65119989/3789797
       // Not available in Discord.js version 12
       // Discord version 13 is still not released.  (https://github.com/discordjs/discord.js/releases)


    }
    // https://stackoverflow.com/questions/41247353/change-user-nickname-with-discord-js
    if (message.content.includes('changeNick')) {
       message.channel.send('Trying to change username..');
       if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) {
        return message.channel.send('I don\'t have permission to change your nickname!');
       } else { message.channel.send('I do have permission to change your nickname! Nice.');}
       // Crashes/shutdowns the bot.
       //message.member.setNickname(message.content.replace('changeNick ', ''));
         //var nick = message.content.split(" ").slice(1).join(" ");
         //message.member.setNickname(nick);
         message.guild.members.get(message.author.id).setNickname("asd");
         //message.channel.send('Tried to change username..');
         //message.guild.me.setNickname('Level Up!'); //https://stackoverflow.com/questions/55698613/changing-nickname-of-bot-with-a-command
    }
   
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
