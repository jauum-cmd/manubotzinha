const Discord = require('discord.js')
const config = require("../config.json")
var prefix = config.prefix

module.exports.run = (client,message,args)=>{
  if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== '422099799001530396') return message.reply("<:7775:593645935280783431> | você não possui permissão para usar esse comando.")
message.reply("Estou sendo divulgada...").then(msg => msg.delete(8000))
  message.delete()

  const membros = message.guild.memberCount;
  let fumante = client.users.get('631219646275780659')
  let autor = message.author
  let enviadoembed = new Discord.RichEmbed()
  .setTitle(`**` + client.user.username + `foi divulgada para ${membros} usuários!**`)
  .setColor("#000000")
  .addField(`**Divulgada por:**`, `\`${message.author.tag}\``, true)
  .addField(`**ID:**`, `\`${message.author.id}\``, true)
  .addField(`**Servidor:**`, `${message.guild.name}`)
  fumante.send(enviadoembed)

const larinha = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setDescription('**Olá, eu sou a ' + client.user.username + ', um bot de anúncios DM, divulgação, moderação, nsfw, etc...**')
.setThumbnail(client.user.avatarURL)
.addField('<:botadd:734948586378494003>|  Me adicione em seu servidor:', `**[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=2146958847&scope=bot)**`)
.addField('<a:emoji_73:735770447420850258>|  Minhas Permissões:', `**"Ler, escrever, e Gerenciar mensagens."**\n` +
`Eu fui criada com o propósito de:\n` +
`**Ajudar a todos da comunidade a divulgar e crescer seus servidores.**`)
.addField(`<a:emoji_73:735770447420850258>|  Use ${prefix}ajuda para saber mais.`, `**[Entre em meu servidor https://discord.gg/x8dhyAW](https://discord.gg/x8dhyAW)**`)
.setColor('#8c00ff')
.setImage("https://cdn.discordapp.com/attachments/734941001558261831/736119739142766622/tenor-1.gif")
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();

      message.guild.members.map(membro => {
        membro.send(larinha)
  
    })

}