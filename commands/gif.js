const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gif')
		.setDescription('Sends a random gif!')
		.addStringOption(option =>
			option.setName('category')
				.setDescription('The gif category')
				.setRequired(true)
				.addChoices(
					{ name: 'Funny', value: 'funny' },
					{ name: 'Meme', value: 'meme' },
					{ name: 'Movie', value: 'movie' },
				)),
	async execute(interaction) {
		const category = interaction.options.getString('category');
		// category must be one of 'gif_funny', 'gif_meme', or 'gif_movie'
		
		// Giphy API defaults
		let giphy = {
			baseURL: "https://api.giphy.com/v1/gifs/",
			apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
			tag: category,
			type: "random",
			rating: "pg-13"
		};
		// Giphy API URL
		let giphyURL = encodeURI(
			giphy.baseURL +
				giphy.type +
				"?api_key=" +
				giphy.apiKey +
				"&tag=" +
				giphy.tag +
				"&rating=" +
				giphy.rating
		);
		
		async function newGif() {
			const obj = await (await fetch(giphyURL)).json()
			await interaction.reply(obj.data.url)
		}

		newGif()
	},
};