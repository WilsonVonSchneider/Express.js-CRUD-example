const express = require('express');
require('dotenv').config();
const UserValidation = require('./validations/UserValidation');
const CompanyValidation = require('./validations/CompanyValidation');
const CompanyDepartmentValidation = require('./validations/CompanyDepartmentValidation');
const UserVersions = require('./versions/UserVersions');
const CompanyVersions = require('./versions/CompanyVersions');
const CompanyDepartmentVersions = require('./versions/CompanyDepartmentVersions');

const app = express();

app.use(express.json());

//User routes
app.get('/api/:version/users', UserValidation.index, UserVersions.paginated);
app.post('/api/:version/users', UserValidation.store, UserVersions.create);
app.get('/api/:version/users/:user_id', UserValidation.show, UserVersions.show);
app.put('/api/:version/users/:user_id', UserValidation.update, UserVersions.update);
app.delete('/api/:version/users/:user_id', UserValidation.delete, UserVersions.delete);

//Company routes
app.get('/api/:version/companies', CompanyValidation.index, CompanyVersions.paginated);
app.post('/api/:version/companies', CompanyValidation.store, CompanyVersions.create);
app.get('/api/:version/companies/:company_id', CompanyValidation.show, CompanyVersions.show);
app.put('/api/:version/companies/:company_id', CompanyValidation.update, CompanyVersions.update);
app.delete('/api/:version/companies/:company_id', CompanyValidation.delete, CompanyVersions.delete);

//CompanyDepartment routes
app.post('/api/:version/companies/:company_id/departments', CompanyDepartmentValidation.store, CompanyDepartmentVersions.create);
app.get('/api/:version/companies/:company_id/departments/:department_id', CompanyDepartmentValidation.show, CompanyDepartmentVersions.show);
app.put('/api/:version/companies/:company_id/departments/:department_id', CompanyDepartmentValidation.update, CompanyDepartmentVersions.update);
app.delete('/api/:version/companies/:company_id/departments/:department_id', CompanyDepartmentValidation.delete, CompanyDepartmentVersions.delete);
app.get('/api/:version/companies/:company_id/departments', CompanyDepartmentValidation.list, CompanyDepartmentVersions.list);

module.exports = app;