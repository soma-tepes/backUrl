const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

function createUrlModel(tableName) {
  
    return db.define(tableName, {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        nameurl: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        namelink: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('active', 'disabled'),
            allowNull: false,
            defaultValue: 'active',
        },
    });
}

module.exports = createUrlModel;