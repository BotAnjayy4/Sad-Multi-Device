import fs from 'fs'
let handler = async (m, { conn }) => {
conn.reply(m.chat, `*https://github.com/Varr/botmd*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '',
body: '',         
previewType: 0, thumbnail: fs.readFileSync("./thumbnail.jpg"),
sourceUrl: `https://github.com/Varr`}}})
}
handler.command = ['sc','script'] 
handler.help = ['sc']
handler.tags = ['general']
export default handler