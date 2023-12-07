// Archivo: comandos/adivinanza.js
const { Message, EmbedBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');

module.exports = {
    structure: {
        name: 'adivinanza',
        description: '¡Obtén una adivinanza aleatoria!',
        aliases: ['adivina', 'riddle'],
        cooldown: 15000
    },
    /**
     * @param {ExtendedClient} client 
     * @param {Message<true>} message 
     * @param {string[]} args 
     */
    run: async (client, message, args) => {
        // Lista de adivinanzas (puedes agregar más)
        const riddles = [
            "Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera.",
            "Tiene dientes y no come, tiene cabeza y no es hombre.",
            "Se usa más de noche que de día, y nunca se ve. ¿Qué es?",
            // Agrega más adivinanzas aquí
        ];

        // Selecciona una adivinanza aleatoria
        const randomIndex = Math.floor(Math.random() * riddles.length);
        const randomRiddle = riddles[randomIndex];

        // Responde con la adivinanza en un mensaje embed
        await message.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle('Adivinanza 🤔')
                    .setDescription(randomRiddle)
            ]
        });
    }
};
