const express = require("express");
const app = express();
// const path = require("path");
// const server = require("http").createServer(app);
// const sessionService = require("./sessionService");
const session = require("express-session");
// var pgSession = require("connect-pg-simple")(session);
// const cookieParser = require("cookie-parser");
const massive = require("massive");
require("dotenv").config();

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

app.use(
  session({
    saveUninitialized: true,
    secret: SESSION_SECRET,
    resave: true,
    key: "express.sid",
    cookie: {
      maxAge: 1209600000 // 2week cookie
    }
  })
);

let db;
massive(CONNECTION_STRING).then(databaseInstance => {
  db = databaseInstance;
  app.set("db", db);
  console.log("db is connected");
});

const port = SERVER_PORT;
app.listen(port, () => console.log(`Listening on port ${port}`));
