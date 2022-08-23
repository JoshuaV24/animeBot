const { SlashCommandBuilder, EmbedBuilder, channelLink } = require('discord.js');
const {request } = require('undici');
const {getAttribute} = require('../utils/get-attribute.js');
const {Client, Collection, GatewayIntentBits} = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


BASE_API_PATH = 'https://kitsu.io/api/edge';



const getAnimeName = async function(interaction){
    const animeName = interaction.options._hoistedOptions[0].value;
    return animeName;
}



module.exports = {
	data: new SlashCommandBuilder()
		.setName('summary')
		.setDescription('Gives you a summary of your requested anime')
        .addStringOption (option => {
            return option.setName('anime').setDescription('name of the anime').setRequired(true)
        }),
	async execute(interaction) {
        const animeName = await getAnimeName(interaction);
        const synopsis = await getAttribute(interaction, 'synopsis');
        const rating = await getAttribute(interaction, 'averageRating');
        const startDate = await getAttribute(interaction, 'startDate');
        const endDate = await getAttribute(interaction, 'endDate');
        const episodeCount = await getAttribute(interaction, 'episodeCount');
        interaction.reply(`${animeName}\nRating: ${rating}\n${synopsis}\nStart Date: ${startDate}\tEnd Date: ${endDate}\nEpisode Count: ${episodeCount}`)
	},
};