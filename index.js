



const { Telegraf } = require('telegraf')

const bot = new Telegraf("1323936121:AAHixzno7g60DXEcJ7x0PfgAQZiOAKlnZqU")
const { DownloaderHelper } = require("node-downloader-helper");

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.command("text", async (ctx)=>{
    const query1 = ctx.message.text.split(" ")[1];
    console.log(query1)
  //  const query2 = ctx.message.reply.text
    


  const dl = new DownloaderHelper(query1,"./downloads");
 const ff= await dl.on("end", () =>ctx.telegram.sendDocument(ctx.chat.id,{source:"./"+dl.getDownloadPath()}))  
  //ctx.telegram.sendDocument(ctx.chat.id,{source:dl.skip.})
  //ctx.reply(dl.getDownloadPath()))//console.log(dl.getDownloadPath()))
  console.log(ff)
  dl.start()
    //console.log(query1)
    //const dl = new DownloaderHelper(query1, __dirname);
    //dl.on("end", () => console.log(dl.getDownloadPath(),dl.eventNames())
    //ctx.reply("download completed to server",dl.getDownloadPath())
   // )//console.log("Download Completed");
    //dl.start()
   // ctx.telegram.sendDocument(ctx.chat.id,{source:dl.skip.})
    //return 

  //  ctx.telegram.sendDocument(ctx.chat.id,{source:"./"+query1})
    console.log(query1)
    //console.log(query2)


})


bot.on("inline_query",async(ctx)=>{
    query = ctx.inlineQuery.query

 //const aqq = await ctx.telegram.sendDocument(ctx.chat.id,`./${query}`)
})
bot.launch()