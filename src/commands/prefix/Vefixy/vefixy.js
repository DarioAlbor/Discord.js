// Archivo: comandos/vefixy.js
const { Message, EmbedBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const config = require('../../../config');
const GuildSchema = require('../../../schemas/GuildSchema');

module.exports = {
    structure: {
        name: 'vefixy',
        description: '✨ ¡Toda la información de Vefixy.com en un solo comando! ✨\n💻 Ingresa ?vefixy y recibí más información sobre mi uso.',
        aliases: ['v'],
        cooldown: 15000
    },
    /**
     * @param {ExtendedClient} client 
     * @param {Message<true>} message 
     * @param {string[]} args 
     */
    run: async (client, message, args) => {
        const vefixyEmbed = new EmbedBuilder()
            .setTitle('✨ ¡Toda la información de Vefixy.com en un solo comando! ✨')
            .setDescription('💻 Ingresa ?vefixy y recibí más información sobre mi uso.');

        const vefixyMessage = await message.reply({
            embeds: [vefixyEmbed]
        });

        // Agregamos la reacción automática al emoji :heart_hands:
        vefixyMessage.react('❤️');

        // Crear un filtro para el evento de reacción
        const filter = (reaction, user) => {
            return ['❤️'].includes(reaction.emoji.name) && user.id !== client.user.id;
        };

        // Crear un colector de reacciones
        const collector = vefixyMessage.createReactionCollector({ filter, time: 30000 });

        // Manejar evento de recolección de reacciones
        collector.on('collect', async (reaction, user) => {
            // Responder con frases personalizadas
            if (reaction.emoji.name === '❤️') {
                await message.channel.send(`Que me reaccionas, ${user.username}? ¿Buscando travas en el microcentro, ${user.username}?`);
            }
        });

        // Manejar evento de finalización del colector
        collector.on('end', collected => {
            // Limpiar las reacciones después de 30 segundos
            vefixyMessage.reactions.removeAll().catch(error => console.error('Error al limpiar las reacciones:', error));
        });
    }
};