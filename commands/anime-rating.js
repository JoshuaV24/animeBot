const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const {getAttribute} = require('../utils/get-attribute.js');


BASE_API_PATH = 'https://kitsu.io/api/edge';



module.exports = {
	data: new SlashCommandBuilder()
		.setName('rating')
		.setDescription('Replies with the rating of the anime')
        .addStringOption (option => {
            return option.setName('name').setDescription('name of the anime').setRequired(true)
        }),
	async execute(interaction) {
        const animeName = interaction.options._hoistedOptions[0].value
        const rating = await getAttribute(interaction, 'averageRating');
        interaction.reply(`Average rating of ${animeName}: ${rating}`)
	},
};

