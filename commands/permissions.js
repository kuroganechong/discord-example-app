const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('permissions')
        .setDescription('Get or edit permissions for a user or a role')
        .addSubcommandGroup((group) =>
            group
                .setName('user')
                .setDescription('Get or edit permissions for a user')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('get')
                        .setDescription('Get permissions for a user')
                        .addUserOption(option => option.setName('user').setDescription('The user to get').setRequired(true))
                        .addChannelOption(option => option.setName('channel').setDescription('The channel permissions to edit. If omitted, the guild permissions will be returned')))
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('edit')
                        .setDescription('Edit permissions for a user')
                        .addUserOption(option => option.setName('user').setDescription('The user to edit').setRequired(true))
                        .addChannelOption(option => option.setName('channel').setDescription('The channel permissions to edit. If omitted, the guild permissions will be returned'))))
        .addSubcommandGroup((group) =>
            group
                .setName('role')
                .setDescription('Get or edit permissions for a role')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('get')
                        .setDescription('Get permissions for a role')
                        .addRoleOption(option => option.setName('role').setDescription('The role to get').setRequired(true))
                        .addChannelOption(option => option.setName('channel').setDescription('The channel permissions to get. If omitted, the guild permissions will be returned')))
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('edit')
                        .setDescription('Edit permissions for a user')
                        .addRoleOption(option => option.setName('role').setDescription('The role to edit').setRequired(true))
                        .addChannelOption(option => option.setName('channel').setDescription('The channel permissions to edit. If omitted, the guild permissions will be returned')))),
    async execute(interaction) {
        if(interaction.member.roles.cache.has('role-id-here')) {
            if (interaction.options.getSubcommandGroup() === 'user'){
                const user = interaction.options.getUser('user');
                if (interaction.options.getSubcommand() === 'get') {
                    await interaction.reply(`You have ran the command for getting ${user.username}'s perms\nID: ${user.id}`);
        
                } else if (interaction.options.getSubcommand() === 'edit') {
                    await interaction.reply(`You have ran the command for editing ${user.username}'s perms\nID: ${user.id}`);
                }
            } else {
                const role = interaction.options.getRole('role');
                if (interaction.options.getSubcommand() === 'get') {
                    await interaction.reply(`You have ran the command for getting ${role.name}'s perms\nID: ${role.id}`);
        
                } else if (interaction.options.getSubcommand() === 'edit') {
                    await interaction.reply(`You have ran the command for editing ${role.name}'s perms\nID: ${role.id}`);
                }
            }
        } else {
            await interaction.reply({content: `You have no permission!`, ephemeral: true});
        }
    }
}
