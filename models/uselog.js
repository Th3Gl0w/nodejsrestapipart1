'use strict';
module.exports = (sequelize, DataTypes) => {
  const uselog = sequelize.define('uselog', {
    login: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  uselog.associate = function(models) {
    // associations can be defined here
  };
  return uselog;
};