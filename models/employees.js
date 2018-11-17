module.exports = function(sequelize, DataTypes) {
    const Employee = sequelize.define('Employee', {
      name: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: DataTypes.STRING,
      startDate: DataTypes.DATE,
      role: DataTypes.STRING

    });
    return Employee;
  };