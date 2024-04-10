const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "",
  dialect: "",
  database:"",
  password:"",
  port:"",
});
sequelize.sync().then(() => {
  console.log(`Database & tables created!`);
});
module.exports = sequelize;
