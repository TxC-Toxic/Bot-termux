let handler = function (m) {
  // this.sendContact(m.chat, '50373488366', 'SataNic', m)
  this.sendContact(m.chat, '50373488366', 'Admin SataNic', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
