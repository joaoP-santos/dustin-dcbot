//Imports modules
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

//Creates a client
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//Gets commands files from "commands" folder
client.commands = new Collection();
const commandFiles = fs
    .readdirSync('./commands')
    .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
}

//Sends a log when the client is ready
client.once('ready', () => {
    console.log(`Client ready! Logged in as ${client.user.tag}`);
});

//Reacts to slash commands
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;
    //Gets the command in client.commands Collection
    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    //Runs the command
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content: 'There was an error while executing this command!',
            ephemeral: true,
        });
    }
});

client.login(token);
