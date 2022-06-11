let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Fira-Bot
*✉️ Nama RL* : Gaara
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 6 September
*🎨 Umur* : 21
*🧮 Kelas* : 1
*🧩 Hobby* : Ngemtod, Ngomcok:v, Recode script bot
*💬 Sifat* : Idiot, Tidak Ramah, Kanjut, Prik, Pedofil
*🗺️ Tinggal* : Indo, Riau, Indragiri Hulu, Air Molek
*❤️ Suka* : warnah pink & biru, Hanime, waifu, loli, trap, furry, kucing
*💔 Benci* : autis, anak epep, seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @gaara_xploite
*🇫  Facebook* : Varr
*🏮 Chanel Youtube* : GaaraOfc
*🐈 Github:* VarrX

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler