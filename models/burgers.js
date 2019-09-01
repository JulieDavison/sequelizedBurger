module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {
    burgername: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
    
  });
  return burger;
};
