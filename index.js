const { setup } = require("aoi.parser");
const aoijs = require("aoi.js");
const {token, prefix} = require("./config.json")
const bot = new aoijs.AoiClient({
  token: token, // isi token 
  prefix: prefix,
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"]
});

//variable 
require("./handler/var.js")(bot);

//command handler
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

//aoi.parser
const parser = aoijs.Util
setup(parser)
