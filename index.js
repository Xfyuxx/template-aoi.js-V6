const aoijs = require("aoi.js");
const {token, prefix} = require("./config.json")
const bot = new aoijs.AoiClient({
  token: token, // isi token 
  prefix: prefix,
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"]
});

//variable 
bot.variables(require("./handler/var.js"));

//command handler
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")