import { Model, DataTypes } from "sequelize";
import { sequelize } from '../instances/mysql';

interface UserInstances extends Model {
    id: number,
    email: string,
    senha: string
}

export const Usuarios = sequelize.define<UserInstances>("Usuarios", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    email: {
        unique: true,
        type: DataTypes.STRING
    },
    senha: DataTypes.STRING
}, {
    tableName: "users",
    timestamps: false
})