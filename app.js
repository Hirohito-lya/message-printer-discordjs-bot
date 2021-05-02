const Discord = require('discord.js') //We inculded discord.js
const fs = require('fs') //We included file system
const client = new Discord.Client()
const settings = require('./settings.json')
const token = settings.token

client.on('ready', () => {
  //When bot is ready this function prints message to console
  console.log('Bot is ready now')
})

client.on('message', msg => {
  //This function adds text to file
  fs.appendFile('messages.txt', `Message author : ${msg.author.username} Message content : ${msg.content} \n`, function(err,data){
    if(err) throw err // When a error occurred this code is shows error

    console.log('Message is printed') // When a message printed show log to console
  })
})

client.login(token)
