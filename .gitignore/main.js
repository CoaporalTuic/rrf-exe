

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const prefix = '!'; //I put ! but it can be what ever you want$

app.set('port',(process.env.PORT || 5000))

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}// In order for this to work you must make a folder called commands

client.once('ready', () => {
    console.log('Bot is online');// this sends a message to you in the console when the bot is online

    client.on('message', message => {
        if (!message.content.startsWith(prefix) || message.author.bot)return;
            const args = message.content.slice(prefix.length).split(/ +/);
            const command = args.shift().toLowerCase();
    });//this is the part that "stores" your commands and it runs them when the command is called
});

clien.login(process.env.TOKEN)
