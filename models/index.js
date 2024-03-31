const sequelizeMySQL = require("../db/mysql"); // Adjust the path as needed
const sequelizePostgres = require("../db/postgres"); // Adjust the path as needed

const definePatientModel = require("./patients");
const defineAdtModel = require("./adt");

const patientsMySQL = definePatientModel(sequelizeMySQL);
const adtMySQL = defineAdtModel(sequelizeMySQL);

const patientsPostgres = definePatientModel(sequelizePostgres);
const adtPostgres = defineAdtModel(sequelizePostgres);

// Define associations
patientsMySQL.hasMany(adtMySQL, { foreignKey: "patientId" });
adtMySQL.belongsTo(patientsMySQL, { foreignKey: "patientId" });

patientsPostgres.hasMany(adtPostgres, { foreignKey: "patientId" });
adtPostgres.belongsTo(patientsPostgres, { foreignKey: "patientId" });

module.exports = { patientsMySQL, adtMySQL, patientsPostgres, adtPostgres };
