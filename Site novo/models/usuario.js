'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nmUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		login: {
			field: 'emailUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senhaUsuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		foto: {
			field: 'fotoUsuario',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		acertos: {
			field: 'acertoUsuario',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		erros: {
			field: 'erroUsuario',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		tentativa: {
			field: 'tentUsuario',
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, 
	{
		tableName: 'Login', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
