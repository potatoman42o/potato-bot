const Discord = module.require("discord.js");

module.exports = {
  name: "suggest",
  description: "Suggest Features for potato",
  botPerms: ["EmbedLinks"],
  run: async (client, message, args) => {
    const avatar = message.author.avatarURL;
    const suggestchannel = client.channels.cache.get("1039881573178277929");
    const suggestion = args.join(" ");
    if (!suggestion) {
      return message.channel.send("Please Suggest Something");
    }
    message.channel.send(
      "Thanks for Suggesting Features for potato. Our Mod team will inform you if your Suggestion is accepted or not!"
    );
    const embed = new Discord.EmbedBuilder()
      .setAuthor(`New Suggestion!`, avatar)
      .setDescription(`${suggestion} \n\nBy: ${message.author.tag}\nUser ID: ${message.author.id}`)
      .setColor("Random");

    suggestchannel.send({ embeds: [embed] });
  },
  catch(error) {
    const errorlogs = client.channels.cache.get("1039881573178277929");
    message.channel.send(
      "Looks like an error has occured. The error has been reported to the Report Section"
    );
    errorlogs.send(`Error in Suggest Command! \nError: \n` + error);
  },
};
