module.exports = function(sequelize, DataTypes) {
    const Employees = sequelize.define('Employees', {
      name: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      email: DataTypes.STRING,
      startDate: DataTypes.DATE,
      role: DataTypes.STRING

    });
    return Employees;
  };
