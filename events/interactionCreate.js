const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if(interaction.isButton()) {
			console.log('Button event received')
			return;
		}
		
		if(interaction.isStringSelectMenu()) {
			console.log('Menu event received')
			if (interaction.customId === 'welcome_menu_select') {
				
				const selected = interaction.values[0];

				if (selected === 'verify') {
					// give role to the user on select
					await interaction.reply({ content: 'You are now verified!', ephemeral: true });
				} else if (selected === 'serverinfo') {
					await interaction.reply({ content: `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`, ephemeral: true });
				}
			}
			return;
		}

		if (interaction.isChatInputCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);
	
			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}
	
			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(`Error executing ${interaction.commandName}`);
				console.error(error);
			}
		}
	},
}