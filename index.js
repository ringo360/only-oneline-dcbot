(new (require("discord.js").Client)()).on("messageCreate",(m)=>!m.user.bot&&m.reply("hello world!")).login("YOUR TOKEN HERE");
