/**
 * An example of how you can send embeds
 */

// Extract the required classes from the discord.js module
const { Client, MessageEmbed } = require('discord.js');

const TOKEN = process.env.arcadia

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');

});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'em1') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Discord Terms of Service')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription('1.1 Elke actie die Discords Terms of Service breekt, zal resulteren in een permanent verbod, met inbegrip van, maar niet beperkt tot het gebruik van gewijzigde klanten en het gebruik van minderjarigen.\n\n 1.2 De Discord Terms of Service kan hier worden gevonden,\n en moet worden gelezen door alle discord gebruikers.');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }

});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'em1') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Gedrag')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription('2.1 Als lid van deze onenigheid moet u elk individu met respect behandelen, in de poging om van het provoceren van een ander lid, zal je worden tegengehouden en gesproken.\n\n 2.2 Beginnen en/of betrokken raken bij ruzies wordt niet getolereerd binnen deze onenigheid, alle persoonlijke zaken moeten worden meegenomen om berichten te sturen. (bijv. Ruzie over Virtual Trucking Companies, andere multiplayer-projecten, andere communities, persoonlijke zaken, enz.)\n\n 2.3 Het gebruik van godslastering is toegestaan, maar het gebruik ervan om een lid direct te beledigen is verboden.\n\n 2.4 Het ontzeggen van een lid aan zijn eigen mening is niet toegestaan, leden hebben het recht om hun mening te geven.\n\n 2.5 Agressief gedrag ten opzichte van andere leden van de onenigheid zal worden onderbroken door een staflid.');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }

});

client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'em1') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
      const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Gebruikersnamen & Avatars')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('3.1 Het gebruik van je avatar of naam om je voor te doen als iemand wordt niet getolereerd. om het te veranderen en als u dat niet doet, zal dat leiden tot uw ontslag uit de Vender Nederland Truckers.\n\n 3.2 Gebruikersnamen en avatars mogen geen beledigend, expliciet of lasterlijk karakter hebben, Betekenissen.');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
});

client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'em1') {
        // We can create embeds using the MessageEmbed constructor
        // Read more about all that you can do with the constructor
        // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
        const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Ongepaste inhoud')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('4.1 Elke ongepaste inhoud met betrekking tot een van de volgende zaken is ten strengste verboden: geweld, seksueel expliciete inhoud, haat, drugsgebruik en extreme politieke websites.\n\n 4.2 Koppelingen die vertrouwelijke informatie bevatten, zoals meningen van personen, identificeerbare informatie is verboden.\n\n 4.3 Links naar websites en gifs zijn verboden, het vinden van een bypass zal leiden tot een straf. Alleen Nitro Boosters en bepaalde rangen kunnen bepaalde gif-links en website-links plaatsen.\n\n 4.4 Het gebruik van links of bestanden met IP Trackers, kwaadaardige software en/of het promoten van illegale software is verboden.');
        // Send the embed to the same channel as the message
        message.channel.send(embed);
    }

});

        client.on('message', message => {
      // If the message is "how to embed"
      if (message.content === 'w1') {
        // We can create embeds using the MessageEmbed constructor
        // Read more about all that you can do with the constructor
        // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
        const embed = new MessageEmbed()
          // Set the title of the field
          .setTitle('Wie zijn wij')
          // Set the color of the embed
          .setColor(0xff0000)
          // Set the main content of the embed
          .setDescription('Vendor Nederland is als geen andere een ETS2- truckbedrijf. Wij zijn een gemeenschap die de manier waarop virtuele trucking vandaag de dag is, aan het veranderen is. Wij zoeken truckers over heel Nederland en België die zich inzetten om hun tijd in ons bedrijf neer te zetten. Onze missie is om een plek te crieëren waar truckers op ETS2 samen kunnen komen om een vriendelijke gemeenschap te vormen. Onze chauffeurs zullen altijd op de eerste plaats komen en om dat te doen, moeten we zorgen voor verantwoordelijkheid, respect, vertrouwen en initiatief naar alle leden toe. Lees hieronder meer over ons.');
        // Send the embed to the same channel as the message
        message.channel.send(embed);
      } 

  });

      client.on('message', message => {
        // If the message is "how to embed"
        if (message.content === 'w1') {
          // We can create embeds using the MessageEmbed constructor
          // Read more about all that you can do with the constructor
          // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
          const embed = new MessageEmbed()
            // Set the title of the field
            .setTitle('Word Lid van ons')
            // Set the color of the embed
            .setColor(0xff0000)
            // Set the main content of the embed
            .setDescription('Wil jij ons community helpen met het groeien van kilometers? Dat kan altijd, je kunt solliciteren via de link hier onder. Wij waarderen de hulp van jullie. Hoe meer personeel wij hebben hoe groter onze community word.');
          // Send the embed to the same channel as the message
          message.channel.send(embed);

        }

      });

      client.on('message', message => {
        // If the message is "how to embed"
        if (message.content === 'w1') {
          // We can create embeds using the MessageEmbed constructor
          // Read more about all that you can do with the constructor
          // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
          const embed = new MessageEmbed()
            // Set the title of the field
            .setTitle('Onze Missie')
            // Set the color of the embed
            .setColor(0xff0000)
            // Set the main content of the embed
            .setDescription('Onze missie is om: Verander de manier waarop virtuele trucking vandaag de dag is door de kracht van technologie en creatief denken. Wij zoeken truckers over heel Nederland en België die zich inzetten om hun tijd in ons bedrijf neer te zetten. Het is onze missie om de grenzen te verleggen en het beste te bieden voor het plezier van onze chauffaurs.');
          // Send the embed to the same channel as the message
          message.channel.send(embed);

        }
        
});
  

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.TOKEN);
