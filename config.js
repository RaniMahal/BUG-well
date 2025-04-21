/*
Developer Info :
WA : wa.me/6285273114090
Tele : t.me/fadstore

*/
const fs = require('fs')

global.botname = "MetaCrashV5"
global.version = "5.0.0"
global.owner = "6285273114090"
global.footer = "Fad-Sigma"
global.idch = "@newsletter"
global.packname = "Mi Ayam"

//Global Thumb
global.thumb = "https://pornhub"

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
