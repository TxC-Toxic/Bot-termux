let handler = function (m) {
  if (!m.quoted) throw 'Mensaje de bot de respuesta!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Sólo puedo eliminar mensajes de mí !'
  if (!isBaileys) throw 'El mensaje no fue enviado por el bot!'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i

module.exports = handler
