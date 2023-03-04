const { ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType, SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	row: new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('primary')
				.setLabel('Click me!')
				.setStyle(ButtonStyle.Primary)
		),
	async execute(interaction) {
		//await interaction.deferReply({ephemeral: true});
		//await wait(4000);
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		const roundtripmsg = `Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`
		interaction.editReply({content: roundtripmsg, components: [this.row]});
		//await interaction.followUp('Pong again!');
		//await wait(2000);
		//await interaction.editReply('Pong again!');
		const collector = sent.createMessageComponentCollector({ componentType: ComponentType.Button, time: 15000 });
		this.row.components[0].setDisabled(false)
		interaction.editReply({content: roundtripmsg, components: [this.row]});

		collector.on('collect', i => {
			if (i.user.id === interaction.user.id) {
				i.reply({ content: `${i.user.id} clicked on the ${i.customId} button.`, ephemeral: true });
			} else {
				i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
			}
		});

		collector.on('end', collected => {
			console.log(`Collected ${collected.size} interactions.`);
			this.row.components[0].setDisabled(true)
			interaction.editReply({content: roundtripmsg, components: [this.row]});
		});
	}
};