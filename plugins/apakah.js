let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Preguntas:* ${m.text}
*Respuesta:* ${pickRandom(['Si','Tal vez lo sea.','Posible','puede no ser ','No','Imposible'])}
`.trim(), m)
}
handler.help = ['Poner <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

