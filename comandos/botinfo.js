const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
  message.delete();  

let bicon = bot.user.displayAvatarURL;
let botembed = new Discord.RichEmbed()
.setDescription(`Informacões da ${bot.user.username} \n\n\nVersão do **Bot**: 1.0`)
.setColor("#8c00ff")
.setThumbnail(bicon)
.addField("📃 Nome do bot", bot.user.username)
.addField("💻 Servidores conectados agora:", bot.guilds.size)
.addField("👑 Criador:", "<@422099799001530396>")
.addField("💈 Prefixo:","m!anuncio")
.addField("👤 Usuários conectados agora:", bot.users.size)
.addField("Meu convite:", `[Convite](https://discord.com/oauth2/authorize?=&client_id=704875795574816858&scope=bot&permissions=8)`)

return message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}