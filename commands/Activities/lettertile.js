const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: "lettertile",
    description: "Play lettertile.io in Discord",
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('You need to join a voice channel first!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'lettertile').then(async(invite) => {
            
            let embed = new EmbedBuilder()
            .setTitle("LetterTile.io")
            .setDescription(`[Click Here](${invite.code}) to play LetterTile.io!\n\`\`\`\nNote: This feature is not availble for mobile users!\n\`\`\`\nOther Note: Nitro required to play this`)
            .setColor("Green")
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}