const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Pessoas = sequelize.define('Pessoa',
        {
          id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true  
          },
          nome: DataTypes.STRING,
          cpf: DataTypes.STRING,
          tel: DataTypes.STRING
        },
        { tableName: 'pessoas' }
    );
    return Pessoas;
}
