module.exports = function(sequelize, DataTypes) {
  const Shifts = sequelize.define('Shifts', {
    name: DataTypes.STRING,
    reason: DataTypes.TEXT,
    date: DataTypes.DATE,
    duration: DataTypes.DATE,
    role: DataTypes.STRING,
    covered: DataTypes.BOOLEAN,
    priority: DataTypes.STRING,
    personResponsible: DataTypes.SRING
  });
  return Example;
};
