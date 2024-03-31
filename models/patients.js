const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const patients = sequelize.define(
    "patients",
    {
      // Sequelize automatically generates an id field as primary key if not provided
      firstname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATEONLY, // Only the date part, no time
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      externalId: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
    },
    {
      // Model options
      timestamps: false, // Disable automatic timestamp fields (createdAt, updatedAt)
      /*indexes: [
        // Define an index for the HASH type if needed.
        // Note: Sequelize doesn't have a 'HASH' type. Usually, for unique constraints,
        // just setting the field to `unique: true` is enough.
        // If you're using a specific database feature related to HASH types,
        // this might need to be implemented with raw SQL during migration.
        {
          unique: true,
          fields: ["externalId"],
        },
      ],*/
    }
  );

  return patients;
};
