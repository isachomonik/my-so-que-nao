const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    let usuario = sequelize.define(
        "Usuario",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            },
            foto: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            tableName: "usuarios",
            timeStamps: true,
            paranoid: true
        }
    );

    // usuario.associate = (models) => {
    //     usuario.belongsTo(models.publicacao)
    // }

    return usuario
}