require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

//Log when the bot is online
client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

//Where's Archer
client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  //Ping
  if (interaction.commandName === 'ping') {
    const initialTime = Date.now();
    const message = interaction.reply({ content: 'Pinging...', fetchReply: true });
    const latency = Date.now() - initialTime;
    return message.edit(`Pong! Latency is ${latency}ms.`);
  }

  if (interaction.commandName === "wheresarcher") {
    const replies = [
      "Feeding the pig.",
      "Getting yelled at by Kasie.",
      "Taking a bath.",
      "Taking a nap.",
      "At the vape store buying over priced diet weed chocolates.",
      "Eating...again.",
      "Walking in circles.",
      "Went to get more seltzers.",
      "I'm on just give me a minute.",
      "Im 12 hours late, where ya'll at?.",
      "I said I was gonna get on but I'm going to watch movies and pretend to get high.",
      "Kasie made me go out last minute.",
      "I had a manic episode and didn't actually plan on getting on.",
      "So I got side tracked hahahah",
      "Your text seemed like you didn't want to do much so I did not get on.",
      "I forgot I had to do something else.",
      "I went to the gym.",
      "Feeding the dogs.",
      "Feeding the cats.",
      "In the sauna.",
      "In the cryochamber pretending like it's doing something for me",
      "Busy trying to figure our which sock is for my left foot",
      "Well I'm definitely not at Brody's house.",
      "Taking another bath.",
      "'Be on in 20'",
      "Gummies made me yummy.",
      "wadu hek",
      "Where's my vape",
      "Killing bugs.",
      "I invited someone over and pretended like I didn't so I had an excuse that didn't seem like my fault.",
    ];

    const randomIndex = Math.floor(Math.random() * replies.length);
    const randomReply = replies[randomIndex];

    return interaction.reply(randomReply);
  }
  
});

client.login(process.env.TOKEN);
