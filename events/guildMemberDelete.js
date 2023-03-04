const { Events } = require('discord.js');

module.exports = {
	name: Events.GuildMemberRemove,
	async execute(member) {
		const channel = member.guild.channels.cache.find(ch => ch.name === 'member-changes');
  		channel.send(`${member.user.tag} left the server!`);
	},
};