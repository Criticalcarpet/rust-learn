// File to delete all the .git directories inside tutorial files
// Will probably change this to RUST in future

const fs = require('fs')    

fs.readdirSync(__dirname).forEach(function(file) {
  if(fs.lstatSync(`${__dirname}/${file}`).isDirectory()) {
    fs.readdirSync(`${__dirname}/${file}`).forEach(function(dirent) {
      if(dirent === '.git') {
          fs.rmSync(`${__dirname}/${file}/${dirent}`, { recursive: true })
      }
    })
  }
})
