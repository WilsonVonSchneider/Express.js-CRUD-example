const { Sequelize, Model, DataTypes } = require("sequelize");

const connect = () => {

    const hostName = process.env.HOST;
    const userName = process.env.DBUSER;
    const password = process.env.PASSWORD;
    const database = process.env.DB;
    const dialect = process.env.DIALECT;
    const port = process.env.PORT;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: dialect,
        port: port,
        operatorsAliases: false,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    const db = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    db.companies = require("../model/Company")(sequelize, DataTypes, Model);
    db.users = require("../model/User")(sequelize, DataTypes, Model);
    db.company_departments = require("../model/CompanyDepartment")(sequelize, DataTypes, Model);
    db.view_company_departments = require("../model/CompanyDepartmentView")(sequelize, DataTypes, Model);
    

    return db;

}

module.exports = {
    connect
}