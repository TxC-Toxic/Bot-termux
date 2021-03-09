let handler = async (m, { conn, text }) => {
  if (!text) throw 'Pon texto aqui'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention <texto>']
handler.tags = ['tools']

handler.command = /^mentiin$/i

module.exports = handler
