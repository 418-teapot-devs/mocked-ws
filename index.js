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
      avatar_url: "http://localhost:8000/assets/profran.png",
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
        avatar_url: "http://localhost:8000/assets/profran.png",
        username: "profran",
      },
    ],
  },
  {
    name: "Partida #1",
    id: "1",
    host: {
      username: "profran",
      avatar_url: "http://localhost:8000/assets/profran.png",
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
        avatar_url: "http://localhost:8000/assets/X-T1.png",
        username: "profran",
      },
      {
        name: "X-100",
        avatar_url: "http://localhost:8000/assets/X-100.png",
        username: "someoneelse",
      },
    ],
  },
  {
    name: "Partida #1",
    id: "1",
    host: {
      username: "profran",
      avatar_url: "http://localhost:8000/assets/profran.png",
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
        avatar_url: "http://localhost:8000/assets/X-T1.png",
        username: "profran",
      },
      {
        name: "X-100",
        avatar_url: "http://localhost:8000/assets/X-100.png",
        username: "someoneelse",
      },
    ],
  },
  {
    name: "Partida #1",
    id: "1",
    host: {
      username: "profran",
      avatar_url: "http://localhost:8000/assets/profran.png",
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
        avatar_url: "http://localhost:8000/assets/X-T1.png",
        username: "profran",
      },
      {
        name: "X-100",
        avatar_url: "http://localhost:8000/assets/X-100.png",
        username: "someoneelse",
      },
      {
        name: "X-H2S",
        avatar_url: "http://localhost:8000/assets/X-100.png",
        username: "someoneelses",
      },
    ],
  },
  {
    name: "Partida #1",
    id: "1",
    host: {
      username: "profran",
      avatar_url: "http://localhost:8000/assets/profran.png",
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
        avatar_url: "http://localhost:8000/assets/X-T1.png",
        username: "profran",
      },
      {
        name: "X-H2S",
        avatar_url: "http://localhost:8000/assets/X-100.png",
        username: "someoneelses",
      },
    ],
  },
  {
    name: "Partida #1",
    id: "1",
    host: {
      username: "profran",
      avatar_url: "http://localhost:8000/assets/profran.png",
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
        avatar_url: "http://localhost:8000/assets/X-T1.png",
        username: "profran",
      },
      {
        name: "X-H2S",
        avatar_url: "http://localhost:8000/assets/X-100.png",
        username: "someoneelses",
      },
      {
        name: "X-A1",
        avatar_url: "http://localhost:8000/assets/X-100.png",
        username: "someoneelse",
      },
    ],
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
