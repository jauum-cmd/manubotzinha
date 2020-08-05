const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
  message.delete()
    const perm = new Discord.RichEmbed()
        .setColor("#8c00ff")
        .setThumbnail("https://i.pinimg.com/originals/bd/df/d6/bddfd6e4434f42662b009295c9bab86e.gif")
        .addField(`<a:avisoHXZ:724776196847435827> **┆** ${message.author.username}`, `Você não tem permissão para usar este comando!`)
        .addField(`<a:alertaHXZ:727780341108178997> **┆** Como consigo a permissão?`, `Você tem que o adicionar o cargo: **"${client.user.username}"** que ja foi criado na minha entrada no servidor, caso não tenha crie!`)


    if (!message.member.roles.some(r=>[`${client.user.username}`].includes(r.name)) )
            return message.reply(perm);

  
        let dmGuild = message.guild;
        let msg = args.join(" ")

  
        if(!msg || msg.length <= 0) return message.author.send("<a:erradoHXZ:727856180663287898> mensagem foi especificada");
  

        dmGuild.members.forEach(member => {
                member.send(msg);
        });

    const membros = message.guild.memberCount;

    message.channel.send("*\`Mensagem enviada para\`\* ***`" + membros + "`*** *\`membros\`\*").then(msg => msg.delete(15000))
    message.channel.send("**`Mensagem a ser enviada:`\n**" + msg).then(msg => msg.delete(15000))

}