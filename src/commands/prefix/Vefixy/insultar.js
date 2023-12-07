// Archivo: comandos/insultar.js
const { Message } = require('discord.js');

module.exports = {
    structure: {
        name: 'insultar',
        description: 'Menciona a un miembro aleatorio y le falta el respeto de una.',
        aliases: ['i'],
        cooldown: 5000 // Tiempo en milisegundos
    },
    /**
     * @param {import('../ExtendedClient')} client 
     * @param {Message} message 
     * @param {string[]} args 
     */
    run: async (client, message, args) => {
        // Obtener la lista de miembros en el servidor
        const members = message.guild.members.cache.toJSON();

        // Seleccionar un miembro aleatorio
        const randomMember = members[Math.floor(Math.random() * members.length)];

        // Mensajes alternativos
        const insultos = [
            `El gil de ${randomMember} entrega la cola por un fede con speed en kapi.`,
            `Che ${randomMember} aflojale al traveseño`,
            `Wacho tonto, ${randomMember} se hace el turro y lo único de deportivo es que se parece a una pelota.`
        ];

        // Seleccionar un mensaje aleatorio de la lista
        const mensaje = insultos[Math.floor(Math.random() * insultos.length)];

        // Enviar el mensaje mencionando al miembro aleatorio
        message.channel.send(mensaje);
    }
};
