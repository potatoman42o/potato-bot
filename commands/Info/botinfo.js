const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  name: "botinfo",
  description: "Shows the bot info",
  botPerms: ["EmbedLinks"],
  run: async (client, message, args) => {
    const duration = moment
      .duration(client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");

    let embed = new Discord.EmbedBuilder()
      .setTitle("potato-2.0's Info")
      .setColor("Random")
      .setDescription(
        `**Bot Name: **potato-2.0 \n**Owner: **potatoman_420#9296 \n**Total Categories: **8 \n**Total Commands: **${client.commands.size} \n**Users:** ${
          client.users.cache.size
        } \n**Servers:** ${client.guilds.cache.size} \n**Channels:** ${
          client.channels.cache.size
        } \n**Uptime:** ${duration}`
      )
      .addFields([
        { name: "About potato-2.0",
          value: "potato-2.0 is a multi-purpose discord bot with features like moderation, music, logging, welcomer and so much more!"
        },
        { name: "Some Useful Links",
          value: "**Need Help? Join our ** **[Support/Development Server](https://discord.gg/4F2FK2Mt23)** **for assistance**"
        }
      ])
    message.channel.send({ embeds: [embed] });
  },
};
