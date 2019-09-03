module.exports = {
  // get takes a function connect, a next, and the database connection
  get: function(handshake, next, db) {
    // get the sessionId from the data passed into the cookie
    var sessionId = handshake.signedCookies["express.sid"];
    // var sessionId = handshake.signedCookies["express.sid"];
    // if the database has a connection then we will run our querry to the session table
    if (db) {
      console.log("found session");
      // we try to find the stored session from the sessionId
      db.query('select * from "session" where sid = $1', sessionId).then(
        session => {
          // if we get a response where session is true, then we set the response equal to the session property
          if (session) {
            handshake.session = session[0];
            next();
          } else {
            next();
          }
        }
      );
    }
  }
};

// middleware that runs on socket endpoints

// CREATE TABLE "session" (
//     "sid" varchar NOT NULL COLLATE "default",
//       "sess" json NOT NULL,
//       "expire" timestamp(6) NOT NULL
//   )
//   WITH (OIDS=FALSE);
//   ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
