const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { sequelize } = require('../app/models'); // conexão com banco de dados

module.exports = {
  secret: 'snippetfy',
  resave: false,
  saveUninitialized: false, // true cria sessão no node
  store: new SequelizeStore({
    db: sequelize,
  }),
};
