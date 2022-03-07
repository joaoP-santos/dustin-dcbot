const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with the bot ping!'),
  async execute(interaction, client) {
    const embed = {
      title: "Pong! :ping_pong:",
      description: `Ping: ${Date.now() - interaction.createdTimestamp}ms`,
      author: {
        name: interaction.user.tag,
        iconURL: interaction.user.avatarURL()
      },
      color: '#aaf542',
      footer: {
        text: `${module.exports.data.name} • ${module.exports.data.description}`,
        iconURL: client.user.avatarURL()
      }
    }

    interaction.reply({ embeds: [embed] })
  },
};
