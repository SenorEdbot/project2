module.exports = function(sequelize, DataTypes) {
  const Shifts = sequelize.define('Shifts', {
    name: DataTypes.STRING,
    reason: DataTypes.STRING,
    date: DataTypes.DATE,
    duration: DataTypes.DATE,
    role: DataTypes.STRING,
    covered: DataTypes.BOOLEAN,
    priority: DataTypes.STRING,
    personResponsible: DataTypes.STRING
  });
  return Shifts;
};
