// This file is NOT READY!!
READY = false
if(READY){
	const { REST, Routes } = require('discord.js');
	require('dotenv/config')

	const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

	// for guild-based commands
	rest.delete(Routes.applicationGuildCommand(process.env.APP_ID, process.env.GUILD_ID, 'commandId'))
		.then(() => console.log('Successfully deleted guild command'))
		.catch(console.error);

	// for global commands
	rest.delete(Routes.applicationCommand(process.env.APP_ID, 'commandId'))
		.then(() => console.log('Successfully deleted application command'))
		.catch(console.error);

	// All commands
	// for guild-based commands
	rest.put(Routes.applicationGuildCommands(process.env.APP_ID, process.env.GUILD_ID), { body: [] })
		.then(() => console.log('Successfully deleted all guild commands.'))
		.catch(console.error);

	// for global commands
	rest.put(Routes.applicationCommands(process.env.APP_ID), { body: [] })
		.then(() => console.log('Successfully deleted all application commands.'))
		.catch(console.error);
}