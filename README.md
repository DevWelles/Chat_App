# **Real Time Chat App**
## Created with
- Javascript
- React, Redux
- HTML, CSS
- [Scaledrone](https://www.scaledrone.com/) API and Websockets

## Features

### Login, choose your name and avatar

![Login](https://user-images.githubusercontent.com/80517895/157100834-b9b8938d-24fe-457d-8d03-6e9bfd2019f9.png)


### Chat with up to 20 users

![chat](https://user-images.githubusercontent.com/80517895/157099797-6bc5eb12-fb97-4457-b584-6626e501add0.png)

### Create your own new chat rooms

![newRoom](https://user-images.githubusercontent.com/80517895/157102917-f7c883dc-8a9e-4ba7-995c-575ced6bd5e7.png)


## How it works
- Channels

Each app environment has a separate channel with its own ID and secret key.
Having an active connection opened between the client and the server so client can send and receive data. This allows real-time communication using TCP sockets. This is made possible by [Scaledrone](https://www.scaledrone.com/)

- Rooms
 
Rooms divide users connected to a channel into separate messaging groups.
When publishing a message to Scaledrone you need to define a room. A message published to a room will be broadcast to all users who have subscribed to that room (including the original publishing user, if they are subscribed).

- Observable Rooms

Observable rooms act like regular rooms but provide additional functionality for keeping track of connected users and linking messages to users.
The observable rooms feature provides you with the following features:
A way to attach data to a Socket connection. Useful for adding personal data such as a name or an ID to a connection.
Keeping track of online users

## Run it locally

Make sure you have Node.js and npm install.

1. Clone or Download the repository
2. Install Dependencies (npm install)
3. Start the Application (npm start)

## Link to deployed app using Netlify:
https://xenodochial-leakey-8989e0.netlify.app/
 
