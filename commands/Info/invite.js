const Discord = require("discord.js");

module.exports = {
  name: "invite",
  description: "Get the bot's",
  botPerms: ["EmbedLinks"],
  run: async (client, message, args) => {
    let embed = new Discord.EmbedBuilder()
      .setTitle("Invite Me")
      .setColor("Random")
      .setDescription(
        "**Get potato-2.0's Invite Link [Here](https://discord.com/api/oauth2/authorize?client_id=907277680804769852&permissions=8&scope=bot)**\n**Need assistance? Join our [Support Server](https://discord.gg/4F2FK2Mt23) now!**"
      )
    message.channel.send({ embeds: [embed] });
  },
};
