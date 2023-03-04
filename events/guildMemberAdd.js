const { Events } = require('discord.js');

module.exports = {
	name: Events.GuildMemberAdd,
	async execute(member) {
		const channel = member.guild.channels.cache.find(ch => ch.name === 'member-changes');
  		channel.send(`${member.user.tag} joined the server!`);
	},
};