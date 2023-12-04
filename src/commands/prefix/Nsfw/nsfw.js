const { Message } = require("discord.js");
const ExtendedClient = require("../../../class/ExtendedClient");

module.exports = {
  structure: {
    name: "nsfw",
    description: "🔞 Contenido NSFW",
    aliases: ["ns"],
    permissions: "SendMessages",
    cooldown: 5000,
    nsfw: true,
  },
  /**
   * @param {ExtendedClient} client
   * @param {Message<true>} message
   * @param {string[]} args
   */
  run: async (client, message, args) => {
    await message.reply({
      content: "En mantenimiento ⚒️",
    });
  },
};
