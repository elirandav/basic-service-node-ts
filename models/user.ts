'use strict'
import {DataTypes} from "sequelize";
import {Table, Column, Model, HasMany} from 'sequelize-typescript';

@Table({
    tableName: 'Users'
})
export default class User extends Model<User> {
        @Column({
                type: DataTypes.STRING,
                allowNull: false
            })
            first!: string

        @Column({
                type: DataTypes.STRING,
                allowNull: false
            })
            last!: string
}