const {  ActionRowBuilder, StringSelectMenuBuilder, SlashCommandBuilder } = require('discord.js');
const { embed } = require('../embeds/rulesMsg.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('welcomemsg')
		.setDescription('Sends a welcome msg in this channel'),
    menu: new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('welcome_menu_select')
                .setPlaceholder('Please select your actions')
                .addOptions(
                    {
                        label: 'Verify',
                        description: 'This is a description',
                        value: 'verify',
                    },
                    {
                        label: 'Server info',
                        description: 'This is also a description',
                        value: 'serverinfo',
                    },
                ),
        ),
	async execute(interaction) {
		await interaction.reply({ embeds: [embed], components: [this.menu] });
	}
};