module.exports = (sequelize, DataTypes) => {
    const Junction = sequelize.define("Junction", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      movieId: {
        type: DataTypes.INTEGER,
      },
      actorId: {
        type: DataTypes.INTEGER,
      },
    });
    Junction.associate = models => {
      Junction.belongsTo(models.Actor, {
        foreignKey: 'actorId'
      });
      Junction.belongsTo(models.Movie, {
        foreignKey: 'movieId'
      });
    }
    return Junction;
  };