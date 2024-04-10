const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "",
  username: "",
  dialect: "mysql",
  port:"",
  database: "testsql",
  password:""
});
sequelize.sync().then(() => {
  console.log(`Database & tables created!`);
});
module.exports = sequelize;
