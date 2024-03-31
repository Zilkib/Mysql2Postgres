const sequelizeMySQL = require("./db/mysql");
const sequelizePostgres = require("./db/postgres");

const {
  patientsMySQL: PatientMySQL,
  adtMySQL: AdtMySQL,
} = require("./models/index");
const {
  patientsPostgres: PatientPostgres,
  adtPostgres: AdtPostgres,
} = require("./models/index");

async function transferData() {
  try {
    const patients = await PatientMySQL.findAll();
    const adts = await AdtMySQL.findAll();

    await sequelizePostgres.transaction(async (transaction) => {
      await Promise.all(
        patients.map(async (patient) => {
          const existingPatient = await PatientPostgres.findOne({
            where: { id: patient.id },
            transaction,
          });
          if (!existingPatient) {
            // Insert the patient if it doesn't exist
            await PatientPostgres.create(patient.toJSON(), { transaction });
          }
        })
      );

      await Promise.all(
        adts.map(async (adt) => {
          const existingAdt = await AdtPostgres.findOne({
            where: { id: adt.id },
            transaction,
          });
          if (!existingAdt) {
            // Insert the adt if it doesn't exist
            await AdtPostgres.create(adt.toJSON(), { transaction });
          }
        })
      );
    });

    console.log("Data transfer completed successfully.");
  } catch (error) {
    console.error("Error during data transfer:", error);
  }
}

transferData();
