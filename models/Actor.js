module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define("Actor", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    },
  });

  return Actor;
};