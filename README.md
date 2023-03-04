# WIP Discord Bot

This project contains a basic Discord bot written using [Discord.js](https://discord.js.org/).

> ✨ Currently the bot is hosted locally using [ngrok](https://ngrok.com/).

## Project structure
Below is a basic overview of the project structure:

```
├── commands    -> slash commands
│   ├── gif.js
│   ├── info.js
│   ├── permissions.js
│   ├── ping.js
│   ...etc
├── embeds    -> embeds prototypes that will be sent by the bot
│   ├── rulesMsg.js
├── events    -> events that the bot listens to
│   ├── guildMemberAdd.js
│   ├── guildMemberRemove.js
│   ├── interactionCreate.js
│   ├── ready.js
├── commands    -> unused slash commands
│   ├── kick.js
│   ...etc
├── .env -> contain token and ids (IMPORTANT, NOT PUSHED TO GIT)
├── index.js      -> main entrypoint for app
├── delete-commands.js      -> delete slash commands for the bot
├── deploy-commands.js      -> update slash commands in a guild
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## Running app locally

Before you start, you'll need to install [NodeJS](https://nodejs.org/en/download/) and [create a Discord app](https://discord.com/developers/applications) with the proper permissions:
- `applications.commands`
- `bot` (with Send Messages enabled)


Configuring the app is covered in detail in the [getting started guide](https://discord.com/developers/docs/getting-started).

### Setup project

First clone the project:
```
git clone https://github.com/kuroganechong/discord-example-app.git
```

Then navigate to its directory and install dependencies:
```
cd discord-example-app
npm install
```
### Get app credentials

Fetch the credentials from your app's settings and add them to a `.env` file. You'll need your app ID (`APP_ID`), server ID (`GUILD_ID`), bot token (`DISCORD_TOKEN`), and public key (`PUBLIC_KEY`).

Fetching credentials is covered in detail in the [getting started guide](https://discord.com/developers/docs/getting-started).

> 🔑 Environment variables can be added to the `.env` file when developing locally.

### Run the app

After your credentials are added, go ahead and run the app:

```
node index.js
```

> ⚙️ A package [like `nodemon`](https://github.com/remy/nodemon), which watches for local changes and restarts your app, may be helpful while locally developing.

### Set up interactivity

The project needs a public endpoint where Discord can send requests. To develop and test locally, you can use something like [`ngrok`](https://ngrok.com/) to tunnel HTTP traffic.

Install ngrok if you haven't already, then start listening on port `80`:

```
ngrok http 80
```

You should see your connection open:

```
Tunnel Status                 online
Version                       2.0/2.0
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://1234-someurl.ngrok.io -> localhost:80
Forwarding                    https://1234-someurl.ngrok.io -> localhost:80

Connections                  ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```
Now you can communicate with your bot! Remember to run
```
node deploy-commands.js
```
when initiating the bot in a guild for the first time (or everytime there are command updates).

## Other resources
- Read **[the documentation](https://discord.com/developers/docs/intro)** for in-depth information about API features.
- Join the **[Discord Developers server](https://discord.gg/discord-developers)** to ask questions about the API, attend events hosted by the Discord API team, and interact with other devs.
- Check out **[community resources](https://discord.com/developers/docs/topics/community-resources#community-resources)** for language-specific tools maintained by community members.
