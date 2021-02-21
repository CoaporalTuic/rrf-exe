module.exports = {
  name: 'reactionrole',
  description: "Sets up a reaction role message!",
  async execute(message, args, Discord, client) {
      const channel = '696684380374171740';
      const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "NotificationStream");
      const blueTeamRole = message.guild.roles.cache.find(role => role.name === "NotificationMiniJeux");

      const yellowTeamEmoji = '🔴';
      const blueTeamEmoji = '🎮';

      let embed = new Discord.MessageEmbed()
          .setColor('#e42643')
          .setTitle('Notification Role')
          .setDescription('Tu a juste a cliquer sur le(s) emoji(s) en desous pour obtenir le(s) role(s) demandé(s).\n\n'
              + `${yellowTeamEmoji} Pour les stream de Tuic242_, Firawar, Jeffsite et meme de KSE.\n`
              + `${blueTeamEmoji} Pour les sessions de mini jeux !`);

      let messageEmbed = await message.channel.send(embed);
      messageEmbed.react(yellowTeamEmoji);
      messageEmbed.react(blueTeamEmoji);

      client.on('messageReactionAdd', async (reaction, user) => {
          if (reaction.message.partial) await reaction.message.fetch();
          if (reaction.partial) await reaction.fetch();
          if (user.bot) return;
          if (!reaction.message.guild) return;

          if (reaction.message.channel.id == channel) {
              if (reaction.emoji.name === yellowTeamEmoji) {
                  await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
              }
              if (reaction.emoji.name === blueTeamEmoji) {
                  await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
              }
          } else {
              return;
          }

      });

      client.on('messageReactionRemove', async (reaction, user) => {

          if (reaction.message.partial) await reaction.message.fetch();
          if (reaction.partial) await reaction.fetch();
          if (user.bot) return;
          if (!reaction.message.guild) return;


          if (reaction.message.channel.id == channel) {
              if (reaction.emoji.name === yellowTeamEmoji) {
                  await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
              }
              if (reaction.emoji.name === blueTeamEmoji) {
                  await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
              }
          } else {
              return;
          }
      });
  }

}
