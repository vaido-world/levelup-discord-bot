const Discord = require('discord.js');

const client = new Discord.Client();

 // https://stackoverflow.com/questions/60665866/discord-js-send-message-to-a-specific-channel-using-a-bot/60666036#60666036
 client.on('ready', () => {
    console.log('I am ready!');
});

 client.on('ready', () => {
    console.log(`Hi, ${client.user.username} is now online!`);
  client.user.setPresence("I am Devil") 

 client.user.setPresence({
        game: {
            name: 'Use f!help',
            type: "Playing",
            url: "https://discordapp.com/"
        }
    });
  
});

module.exports = (client, message) => {
   client.user.setActivity('U', { type: 'WATCHING' }) //PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM_STATUS
        .then(presence => console.log(`Activity set to: WATCHING ${presence.activities[0].name}`))
        .catch(console.error);
 
 };



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
         // message.member.setNickname('Welcome');
     message.channel.send('Starting to change username..');
     
     message.channel.send('Trying to display author of the message:');
     //message.channel.send(message.guild.member.displayName); //incorect
      message.channel.send(message.author.id);
      message.channel.send(message.author.tag);
     //message.author.setNickname('Please');
     //message.member.setNickname('myNicknameGoesHere');
     //message.channel.send(message.member.user.tag);
     //message.author.setNickname('Welcome'); //Completely no response
         //message.guild.members.get(message.author.id).setNickname("asd"); //Completely no response
         //message.channel.send('Tried to change username..');
     
     
     // Maybe the nicknames are not chaning for the owners of the server. https://stackoverflow.com/a/51112079
     // An owner with a crown maybe is too high on a privilegie in comparison to bot.
     
         //message.guild.me.setNickname('Level Up!'); //https://stackoverflow.com/questions/55698613/changing-nickname-of-bot-with-a-command
    }
   
});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
