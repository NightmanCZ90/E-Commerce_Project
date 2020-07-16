const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //all app will be automaticaly bodyparsed for us, we do not have to put middleware to every app.get / app.post

app.get('/', (req, res) => {
  res.send(`
    <div>
      <form method="POST" >
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Account created');
});

app.listen(3000, () => {
  console.log('Listening');
});

// const port = normalizePort(process.env.PORT || '3000');
// const server = http.createServer(app);
// server.listen(port);