# levelup-discord-bot
https://medium.com/@mason.spr/hosting-a-discord-js-bot-for-free-using-heroku-564c3da2d23f

## Invite:
<a href="https://discord.com/oauth2/authorize?client_id=804719647601459250&scope=bot&permissions=0">client_id=804719647601459250</a>
![Client Id can ba found here](./Note3.png)


## Control Panel
https://discord.com/developers/applications/804719647601459250/bot


## Usage
Simply writing `ping` in a Discord Server Chat,   
a simple message `pong` should be given as a response.  


## Notices
Remember, the original guide to creating and hosting a bot on Heroku had a mistake.  
`procfile` should be renamed to `Procfile`  




## Notes
`The Variable’s key should be BOT_TOKEN and the
 value should be the Client Secret you copied earlier.`  
Token can be found in https://discord.com/developers/applications/804719647601459250/bot  
This Token has to be added to **Settings** of **Config Vars** in **Heroku**  
![Token can be found in ](./Note1.png)
![Heroku Settings Tab](./Note2.png)
