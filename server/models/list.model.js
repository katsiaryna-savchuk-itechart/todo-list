module.exports = (sequelize, Sequelize) => {
  const List = sequelize.define("list", {
    action: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.STRING,
    },
  });
  return List;
};
