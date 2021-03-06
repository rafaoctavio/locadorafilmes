module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true

        },
        nome: DataTypes.STRING,
        email:DataTypes.STRING,
        senha:DataTypes.STRING,
        ehAdmin: DataTypes.BOOLEAN
    },

     {timestamps:false, tableName: "user"});

     user.associate = (models) => {
        user.hasMany(models.Filme, {foreignKey: 'id_user', as: 'filmes'});
     }

    return user;
};
