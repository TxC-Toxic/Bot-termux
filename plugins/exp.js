let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan jumlah exp yang akan diberi'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Etiquetar a uno de ellos'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw 'Sólo un número'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) throw 'Minimo 1'
  let users = global.DATABASE._data.users
  if (exp > users[m.sender].exp) throw 'Exp es insuficiente para transferir'
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`(${-xp} XP) + (${-pjk} XP (Pajak 2%)) = ( ${-exp} XP)`)
  conn.fakeReply(m.chat, `+${xp} XP`, who, m.text)
}
handler.help = ['exp <jumlah>']
handler.tags = ['xp']
handler.command = /^exp$/i
handler.owner = true

module.exports = handler
