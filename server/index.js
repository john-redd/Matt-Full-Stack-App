require('dotenv').config();

const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      app = express(),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      authCtrl = require('./controllers/authController'),
      mainCtrl = require('./controllers/mainController');

app.use(express.json());

massive(CONNECTION_STRING)
    .then(db => {
      app.set('db', db)
      console.log('DB Connected.')
    })
    .catch(err => console.log(err));

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}));

// Auth endpoints
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.post('/auth/logout', authCtrl.logout);
app.post('/auth/user', authCtrl.getUser);

app.put('/api/balance', mainCtrl.updateBalance)

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}.`));