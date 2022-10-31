const express = require("express")
const enableWs = require('express-ws')

const app = express()
enableWs(app)

const matchState = [
  {
    name: "Partida #1",
    id: "1",
    host: {
      username: "profran",
      avatar_url: "https://media-exp1.licdn.com/dms/image/C4D03AQGghvJ_n6eUww/profile-displayphoto-shrink_200_200/0/1533861405382?e=2147483647&v=beta&t=oeeWbZ4SqbWN0Oacr4rRxlHFfIkGPPkCIvUd3iYtKTk",
    },
    status: "waiting",
    max_players: 4,
    min_players: 2,
    games: 200,
    rounds: 10000,
    is_private: false,
    robots: [
      {
        name: "X-T1",
        avatar_url: "https://cdn.dribbble.com/users/1084988/screenshots/4005734/fembot.png",
        username: "profran",
      },
    ],
    result: null,
  },
  {
    name: "Partida #1",
    id: "1",
    host: {
      username: "profran",
      avatar_url: "https://media-exp1.licdn.com/dms/image/C4D03AQGghvJ_n6eUww/profile-displayphoto-shrink_200_200/0/1533861405382?e=2147483647&v=beta&t=oeeWbZ4SqbWN0Oacr4rRxlHFfIkGPPkCIvUd3iYtKTk",
    },
    status: "waiting",
    max_players: 4,
    min_players: 2,
    games: 200,
    rounds: 10000,
    is_private: false,
    robots: [
      {
        name: "X-T1",
        avatar_url: "https://cdn.dribbble.com/users/1084988/screenshots/4005734/fembot.png",
        username: "profran",
      },
      {
        name: "X-100",
        avatar_url: "https://i.pinimg.com/originals/17/f6/8e/17f68e401b36b8b87346557940a40970.png",
        username: "anna",
      },
    ],
    result: null,
  },
  {
    name: "Partida #1",
    id: "1",
    host: {
      username: "profran",
      avatar_url: "https://media-exp1.licdn.com/dms/image/C4D03AQGghvJ_n6eUww/profile-displayphoto-shrink_200_200/0/1533861405382?e=2147483647&v=beta&t=oeeWbZ4SqbWN0Oacr4rRxlHFfIkGPPkCIvUd3iYtKTk",
    },
    status: "in_progress",
    max_players: 4,
    min_players: 2,
    games: 200,
    rounds: 10000,
    is_private: false,
    robots: [
      {
        name: "X-T1",
        avatar_url: "https://cdn.dribbble.com/users/1084988/screenshots/4005734/fembot.png",
        username: "profran",
      },
      {
        name: "X-100",
        avatar_url: "https://i.pinimg.com/originals/17/f6/8e/17f68e401b36b8b87346557940a40970.png",
        username: "anna",
      },
    ],
    result: null,
  },
  {
    name: "Partida #1",
    id: "1",
    host: {
      username: "profran",
      avatar_url: "https://media-exp1.licdn.com/dms/image/C4D03AQGghvJ_n6eUww/profile-displayphoto-shrink_200_200/0/1533861405382?e=2147483647&v=beta&t=oeeWbZ4SqbWN0Oacr4rRxlHFfIkGPPkCIvUd3iYtKTk",
    },
    status: "in_progress",
    max_players: 4,
    min_players: 2,
    games: 200,
    rounds: 10000,
    is_private: false,
    robots: [
      {
        name: "X-T1",
        avatar_url: "https://cdn.dribbble.com/users/1084988/screenshots/4005734/fembot.png",
        username: "profran",
      },
      {
        name: "X-100",
        avatar_url: "https://i.pinimg.com/originals/17/f6/8e/17f68e401b36b8b87346557940a40970.png",
        username: "anna",
      },
      {
        name: "X-H2S",
        avatar_url: "https://i.pinimg.com/originals/17/f6/8e/17f68e401b36b8b87346557940a40970.png",
        username: "lueme",
      },
    ],
    result: null,
  },
  {
    name: "Partida #1",
    id: "1",
    host: {
      username: "profran",
      avatar_url: "https://media-exp1.licdn.com/dms/image/C4D03AQGghvJ_n6eUww/profile-displayphoto-shrink_200_200/0/1533861405382?e=2147483647&v=beta&t=oeeWbZ4SqbWN0Oacr4rRxlHFfIkGPPkCIvUd3iYtKTk",
    },
    status: "in_progress",
    max_players: 4,
    min_players: 2,
    games: 200,
    rounds: 10000,
    is_private: false,
    robots: [
      {
        name: "X-T1",
        avatar_url: "https://cdn.dribbble.com/users/1084988/screenshots/4005734/fembot.png",
        username: "profran",
      },
      {
        name: "X-H2S",
        avatar_url: "https://i.pinimg.com/originals/17/f6/8e/17f68e401b36b8b87346557940a40970.png",
        username: "lueme",
      },
    ],
    result: null,
  },
  {
    name: "Partida #1",
    id: "1",
    host: {
      username: "profran",
      avatar_url: "https://media-exp1.licdn.com/dms/image/C4D03AQGghvJ_n6eUww/profile-displayphoto-shrink_200_200/0/1533861405382?e=2147483647&v=beta&t=oeeWbZ4SqbWN0Oacr4rRxlHFfIkGPPkCIvUd3iYtKTk",
    },
    status: "finished",
    max_players: 4,
    min_players: 2,
    games: 200,
    rounds: 10000,
    is_private: false,
    robots: [
      {
        name: "X-T1",
        avatar_url: "https://cdn.dribbble.com/users/1084988/screenshots/4005734/fembot.png",
        username: "profran",
      },
      {
        name: "X-H2S",
        avatar_url: "https://i.pinimg.com/originals/17/f6/8e/17f68e401b36b8b87346557940a40970.png",
        username: "lueme",
      },
      {
        name: "X-A1",
        avatar_url: "https://i.pinimg.com/originals/17/f6/8e/17f68e401b36b8b87346557940a40970.png",
        username: "anna",
      },
    ],
    result: "X-T1",
  },
]

app.ws("/matches/:matchId", (ws, req) => {
  console.log(`New client connected! matchId: ${req.params.matchId}`)
  let index = 0
  ws.on("close", () => console.log("Client has disconnected!"))

  setInterval(() => {
    if (index <= matchState.length) {
      ws.send(JSON.stringify(matchState[index]))

      index = index + 1
    }
  }, 3000)
})

app.get("/matches/:matchId", (req, res) => {
  res.send({ ...matchState[0], id: req.params.matchId })
})

app.listen(5000, () => {
  console.log(`Server started on port ${5000} :)`)
})
