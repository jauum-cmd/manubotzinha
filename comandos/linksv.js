const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
   if (message.author.id !== '614575465608249346') return;
  
if(!args[0]) return message.reply(`691102787924131930`)  
  let canal = client.guilds.get(args[0]).channels.find(x => x.type == 'text')
  
  const invite = await canal.createInvite({
    maxUses: 0,
    maxAge: 0,
    reason: "Visitinha nesse servidor 😉"
  }).catch(err => "não foi possível criar um convite desse servidor, erro:\n" + `\`\`\`diff\n- ${err}\`\`\``)
  
  let embed = new Discord.RichEmbed()
  .setAuthor(client.guilds.get(args[0]).name, client.guilds.get(args[0]).iconURL)
  .addField("**Voialà!, convite:**", invite)
  .setThumbnail(client.guilds.get(args[0]).iconURL)
  .setColor('#ff47ec')
  .setFooter(`Criador do servidor: ${client.guilds.get(args[0]).owner.displayName}`, client.guilds.get(args[0]).owner.displayAvatarURL)
  message.reply(embed)
  }