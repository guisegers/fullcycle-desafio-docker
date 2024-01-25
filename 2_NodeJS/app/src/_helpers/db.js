const config = require('./../config.json');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
  const { host, port, user, password, database } = config.database;
  console.log(`Inicialize em host: ${host}:${port}, user: ${user}, database: ${database}`);
  // connect to db
  const sequelize = new Sequelize(database, user, password, {
    host: host,
    port: port,
    dialect: 'mysql'
  });
  // init models and add them to the exported db object
  db.People = require('./../people/people.model')(sequelize);
  // sync all models with database
  await sequelize.sync({ alter: true });
}