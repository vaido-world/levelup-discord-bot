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
 
    if (message.content.includes('changeNick')) {
       if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
       // Crashes/shutdowns the bot.
       message.member.setNickname(message.content.replace('changeNick ', 'tests'));
        
    }
   
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
