let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
  Términos y condiciones del Bot *US*
  1. El texto y el nombre de usuario de WhatsApp se almacenarán en el servidor siempre y cuando el bot esté activo
  2. Los datos se eliminarán cuando el bot esté sin conexión
  3. No almacenamos imágenes, videos, archivos, audio y documentos que envía
  4. Nunca le pediremos que proporcione información personal
  5. Si encuentra algún error/ error, informe directamente al bot propietario
  6. Solo le pedimos que nos siga en youtube
     ➥ YouTube: https://www.youtube.com/channel/UC8yq2vREgBFz5Vi_51QNX9g
  7. Lo que usted ordene en este bot, ¡NO SEREMOS RESPONSABLES!

Thanks !
2021©Soft Devil
`.trim(), m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

