'use strict'

import path from "path";
import {Sequelize} from "sequelize-typescript";

const getInstance = (config) => {
    let sequelize: Sequelize = createSequelize(config)
    sequelize.authenticate()
    return {
        sequelize,
        models: loadModels(config.models, sequelize)
    }
}

const loadModels = (tsModelArray: string[] = [], instance: Sequelize) => {
    const models = {}
    loadModelsFromPath(tsModelArray, instance)
    Object.keys(instance.models).forEach(modelKey => {
        models[modelKey] = instance.models[modelKey]
    })
    Object.keys(models).forEach(modelName => associateModel(models, modelName))
    return models
}

const loadModelsFromPath = (tsModelArray: string[], instance: Sequelize) => {
    const seqModelPath: string[] = []
    tsModelArray.forEach(tsModelFile => seqModelPath.push(path.resolve(tsModelFile)))
    instance.addModels(seqModelPath)
}

const associateModel = (models: any, modelName: any) => {
    if (models[modelName].associate) {
        models[modelName].associate(models)
    }
}
const createSequelize = (config: any) => {
    return new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        port: config.port,
        dialect: config.dialect
    });
}

export const database = getInstance((require('./database.config').config))
