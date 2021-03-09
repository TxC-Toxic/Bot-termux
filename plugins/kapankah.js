let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Preguntas:* ${m.text}
*Respuesta:* ${Math.floor(Math.random() * 10)} ${pickRandom(['segundos", "minutos", "horas", "días", "semanas", "meses", "años", "décadas", "siglos"'])} Otra vez ...
`.trim(), m)
}
handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <text>?')
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^kapan(kah)?$/i
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

