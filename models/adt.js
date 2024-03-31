const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const adt = sequelize.define(
    "adt",
    {
      // Sequelize automatically adds an 'id' field as the primary key
      patientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "patients", // name of the Patients table
          key: "id", // key in Patients that Adt references
        },
      },
      type: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      message: {
        type: DataTypes.TEXT("long"), // 'long' modifier for long text
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      orgunit: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      pvType: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      inOrOut: {
        type: DataTypes.ENUM("I", "O"),
        allowNull: false,
      },
    },
    {
      timestamps: false, // Since we're specifying 'createdAt' manually
      freezeTableName: true,
    }
  );

  return adt;
};
