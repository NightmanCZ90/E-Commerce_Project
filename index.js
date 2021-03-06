const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true })); //all app will be automaticaly bodyparsed for us, we do not have to put middleware to every app.get / app.post
app.use(cookieSession({
  keys: ['aosdv9823nj9']
})); // also a middleware
app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);
app.use(cartsRouter);

app.listen(3000, () => {
  console.log('Listening');
});

// const port = normalizePort(process.env.PORT || '3000');
// const server = http.createServer(app);
// server.listen(port);