const {  EmbedBuilder } = require('discord.js');

module.exports = {
    embed: new EmbedBuilder()
        .setColor(0x0099FF)
        .addFields(
            { name: 'Welcome to the jungle', value: 'We got fun and games\nWe got everything you want, honey, we know the names\nWe are the people that can find whatever you may need\nIf you got the money, honey, we got your disease' },
            { name: 'Welcome to the jungle', value: 'We take it day by day\nIf you want it you\'re gonna bleed but it\'s the price to pay\nAnd you\'re a very sexy girl who\'s very hard to please\nYou can taste the bright lights but you won\'t get there for free' },
            { name: 'Welcome to the jungle', value: 'It gets worse here every day\nYou learn to live like an animal in the jungle where we play\nIf you got hunger for what you see you\'ll take it eventually\nYou can have anything you want but you better not take it from me' }
        )
};