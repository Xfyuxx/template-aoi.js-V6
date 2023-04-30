const { setup } = require("aoi.parser");
const { AoiClient, LoadCommands, Util } = require("aoi.js");
const {token, prefix} = require("./config.json")
const bot = new AoiClient({
  token: token, // isi token 
  prefix: prefix,
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"]
});

//variable 
require("./handler/var.js")(bot);

//command handler
const loader = new LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

//aoi.parser

setup(Util)
