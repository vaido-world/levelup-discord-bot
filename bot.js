// Future: Use this example to improve the bot: https://gist.github.com/cherryblossom000/7182a66c577bb5858f4ef88ae713434f

const Discord = require('discord.js');

const client = new Discord.Client();

 // https://stackoverflow.com/questions/60665866/discord-js-send-message-to-a-specific-channel-using-a-bot/60666036#60666036
 client.on('ready', () => {
    console.log('I am ready!');
//client.channels.cache.get('812061099653988413').send('yourmessage'); //V12 Discord.js
 // user.guild.channels.cache.get("812061099653988413").send("SomeText")
});

    //test2
    //https://stackoverflow.com/questions/60665866/discord-js-send-message-to-a-specific-channel-using-a-bot/60666036#60666036
    client.on('ready', () => {
      console.log('Bot is now connected')
        client.channels.find(channel => channel.name === 'bot').send("Hello there! ⚐"); // for discord v11 
        client.channels.find(channel => channel.name === 'bot').send("┠To edit this bot: <https://github.com/vaido-world/levelup-discord-bot/edit/main/bot.js> \
        \n┠Readme for this bot: <https://github.com/vaido-world/levelup-discord-bot>"); // for discord v11 
        client.channels.find(channel => channel.name === 'bot').send("┠The bot is hosted on Heroku, Control Panel: <https://dashboard.heroku.com/apps/levelup-discord-bot/deploy/github>"); // for discord v11 
        client.channels.find(channel => channel.name === 'bot').send("┠The bot is is about to use MongoDB database: <https://www.mongodb.com/>"); // for discord v11 
        client.channels.find(channel => channel.name === 'bot').send("┠Discord Settings for this Bot: <https://discord.com/developers/applications/804719647601459250/bot>"); // for discord v11
        client.channels.find(channel => channel.name === 'bot').send("┠Debugging logs for this Bot: <https://dashboard.heroku.com/apps/levelup-discord-bot/logs> \n[Some more Diagnostics, like server/client latency here?]"); // for discord v11 
     //client.channels.cache.find(channel => channel.name === 'bot1').send("Hello there!"); // for discord v12
    });

 client.on('ready', () => {
    console.log(`Hi, ${client.user.username} is now online!`);
  client.user.setPresence("I am Devil") 
  
console.log('Bot: Hosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
    client.user.setStatus('online')
  
// -----------------------------Activity-----------------------------
//https://support.glitch.com/t/client-user-setactivity-doesnt-work/8625/5
/////////  client.user.setPresence({
/////////         game: {
/////////             name: 'Use f!help',
/////////             type: "Playing",
/////////             url: "https://discordapp.com/"
/////////         }
/////////     });
/////////   
///////// });
///////// 
///////// module.exports = (client, message) => {
/////////    client.user.setActivity('U', { type: 'WATCHING' }) //PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM_STATUS
/////////         .then(presence => console.log(`Activity set to: WATCHING ${presence.activities[0].name}`))
/////////         .catch(console.error);
/////////  
/////////  };
///////// 
// -----------------------------ActivityEND-----------------------------
 client.user.setPresence({
        game: {
            name: 'Use f!help',
            type: "CUSTOM_STATUS",
            url: "https://discordapp.com/"
        }
    });
  
});

module.exports = (client, message) => {
   client.user.setActivity('U', { type: 'CUSTOM_STATUS' }) //PLAYING, STREAMING, LISTENING, WATCHING, CUSTOM_STATUS
        .then(presence => console.log(`Activity set to: WATCHING ${presence.activities[0].name}`))
        .catch(console.error);
 
 };

  
// -----------------------------ActivityNew-----------------------------
  
  
  

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
