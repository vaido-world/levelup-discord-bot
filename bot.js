// Future: Use this example to improve the bot: https://gist.github.com/cherryblossom000/7182a66c577bb5858f4ef88ae713434f

const Discord = require('discord.js');

const client = new Discord.Client();

 // https://stackoverflow.com/questions/60665866/discord-js-send-message-to-a-specific-channel-using-a-bot/60666036#60666036
 client.on('ready', () => {
    console.log('I am ready!');
//client.channels.cache.get('812061099653988413').send('yourmessage'); //V12 Discord.js
 // user.guild.channels.cache.get("812061099653988413").send("SomeText")
});

 /* REMOVED   
    // ___________________________________Sending a message to a specific channel___________________________________
    //https://stackoverflow.com/questions/60665866/discord-js-send-message-to-a-specific-channel-using-a-bot/60666036#60666036
    client.on('ready', () => {
      console.log('Bot is now connected')
        client.channels.find(channel => channel.name === 'bot').send("Hello there! ⚐ The bot is hosted on Heroku and will use MongoDB database"); // for discord v11 
        client.channels.find(channel => channel.name === 'bot').send("To edit this bot: <https://github.com/vaido-world/levelup-discord-bot/edit/main/bot.js> \
        \n> 📚 Readme for this bot \n> <https://github.com/vaido-world/levelup-discord-bot> \
        \n> 🗄 Heroku, Control Panel \n> <https://dashboard.heroku.com/apps/levelup-discord-bot/deploy/github> \
        \n> 🧵 MongoDB database \n> <https://www.mongodb.com/> \
        \n> 📓 Discord Settings for this Bot \n> <https://discord.com/developers/applications/804719647601459250/bot>"); 
        client.channels.find(channel => channel.name === 'bot').send("Debugging logs for this Bot: <https://dashboard.heroku.com/apps/levelup-discord-bot/logs> \n[Some more Diagnostics, like server/client latency here?]"); // for discord v11 
     //client.channels.cache.find(channel => channel.name === 'bot1').send("Hello there!"); // for discord v12
     
     //____________________________Embed Example_______________________________________
     // https://anidiots.guide/first-bot/using-embeds-in-messages
     // https://discordjs.guide/popular-topics/embeds.html#embed-preview
     client.channels.find(channel => channel.name === 'bot').send({embed: {
       color: 3447003,
       description: "A very simple Embed!"
     }});
      //____________________________Embed Example_______________________________________ 
     
    });
    // ___________________________________Sending a message to a specific channel___________________________________ 
    
    REMOVED */



// ___________________________________Sending a "embed" message to a specific channel___________________________________ 
    client.on('ready', () => {
      console.log('Bot is now connected')
     
      const embed = new Discord.MessageEmbed()
        .setAuthor("Level Up! | Discord Bot V12")
        .setTitle("Information about bot")
        /*
         * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
         */
        .setColor(0x00AE86)
        .setDescription("Hello there! ⚐ The bot is hosted on Heroku and will use MongoDB database.")
        .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
        .setImage("http://i.imgur.com/yVpymuV.png")
        .setThumbnail("https://icons.iconarchive.com/icons/zhoolego/material/512/Control-Panel-icon.png")
        /*
         * Takes a Date object, defaults to current date.
         */
        .setTimestamp()
        .setURL("https://discord.js.org/#/docs/main/v12/class/MessageEmbed")
        .addFields({
            name: "GitHub Readme",
            value: "[📚 Readme for this bot](https://github.com/vaido-world/levelup-discord-bot)"
         })
        .addFields({
            name: "Heroku, Control Panel",
            value: "[🗄 Heroku, Control Panel](https://dashboard.heroku.com/apps/levelup-discord-bot/deploy/github)"
         })
        .addFields({
            name: "MongoDB database",
            value: "[🧵 MongoDB database](https://www.mongodb.com)"
         })
        .addFields({
            name: "Bot Discord Settings",
            value: "[📓 Discord Settings for this Bot](https://discord.com/developers/applications/804719647601459250/bot)"
         })
        .addFields({
            name: "Bot Debugging logs",
            value: "[Debugging logs for this Bot](https://dashboard.heroku.com/apps/levelup-discord-bot/logs )"
         })
       
      
        .addFields({ name: "Description",
            value: "A standard Discord bot with simplicity in mind."})
        /*
         * Inline fields may not display as inline if the thumbnail and/or image is too big.
         */
        .addFields({ name: "CC0 Public Domain License", value: "You are free to use for any kind of purpose.", inline: true })
        .addFields({
            name: "Edit or customize this Bot",
            value: "[Change or edit this bot.js](https://github.com/vaido-world/levelup-discord-bot/edit/main/bot.js)"
         })
      
        /*
         * Blank field, useful to create some space.
         */
      
        .addFields({ name: '\u200b', value: '\u200b' })
        .addFields({ name: "Inline Field 3", value: "You can have a maximum of 25 fields.", inline: true});
      
        client.channels.cache.find(channel => channel.name === 'bot').send(embed); // for discord v12 
      });

// ___________________________________Sending a "embed" message to a specific channel___________________________________ 

 client.on('ready', () => {
    console.log(`Hi, ${client.user.username} is now online!`);
  client.user.setPresence("I am Devil") 
  
console.log('Bot: Hosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
    client.user.setStatus('online')
   });
  
// -----------------------------Activity-----------------------------
// Set the bot's presence (activity and status) 👈☕
client.on('ready', () => {
client.user.setActivity('botas! 🖥️', { type: 'LISTENING' });
 
     console.log(`${client.user.username} trying to set Bot Presence and Bot Status!`);
}) // -----------------------------ActivityEND-----------------------------


   
  


  

  
  
  

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
