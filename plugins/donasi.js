let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
  ES GRATIS
╰────

Esto es *#caranya para donación* 
ES GRATIS MI PANA
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
