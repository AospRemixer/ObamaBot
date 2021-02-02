const Discord = require('discord.js'); 

const client = new Discord.Client();

const prefix = '-';

client.once('ready' , () => {
	console.log('Bot By Prabhdeep!')
	client.user.setActivity("With Americans")
});


client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.lenght).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === '-ping'){
		message.channel.send('pong!');
	
    }
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.lenght).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === '-pong'){
		message.channel.send('ping!');
	
    }
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.lenght).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === '-whoareyou'){
		message.channel.send('I am a American politician and attorney who was the 44th president of the United States, from 2009 to 2017. A member of the Democratic Party, I was the first African-American president of the United States.');
	
    }
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.lenght).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === '-whoisthemosthandsome'){
		message.channel.send('Prabhdeep Singh!');
	
    }
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.lenght).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === '-whenwereyouborn'){
		message.channel.send('August 4, 1961');
	
    }
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.lenght).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === '-howoldareyou'){
		message.channel.send('59');
	
    }
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.lenght).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === '-showmeavideo'){
		message.channel.send('https://vimeo.com/507152438');
	
    }
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.lenght).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === '-whatawardshaveyouearned'){
		message.channel.send('https://i.snipboard.io/SjXbqn.jpg');
	
    }
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.lenght).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === '-thanksobama'){
		message.channel.send('No Problem!');
	
    }
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.lenght).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === '-whyareyouspecial'){
		message.channel.send('I am special because I was the first American-African that was the president of America. I respected the country and worked hard to make America a safe place for every type of people!');
	
    }
});

client.login('ODA1OTc2NTc3MjcxMjY3MzM4.YBiuLg.jHWwDQA7R4p1xHgey9JgROnSGgw');