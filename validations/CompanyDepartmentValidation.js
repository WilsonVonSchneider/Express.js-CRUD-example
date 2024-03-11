// CompanyDepartmentValidations.js
const { body, param } = require("express-validator"); // import express validator
// export the validation rules for each route as an array
module.exports = {
  list: [
    param("company_id").isUUID().withMessage("Invalid company ID"), // check if company_id is a valid UUID
  ],
  show: [
    param("company_id").isUUID().withMessage("Invalid company ID"), // check if company_id is a valid UUID
    param("department_id").isUUID().withMessage("Invalid company department ID"), // check if department_id is a valid UUID
  ],
  store: [
    param("company_id").isUUID().withMessage("Invalid company ID"), // check if company_id is a valid UUID
    body('name').notEmpty().withMessage('Name is required'),
    body('created_by').notEmpty().isUUID.apply('Invalid company ID'),
    body('parent_id').optional().isUUID.apply('Invalid parent ID'),
  ],
  update: [
    param("company_id").isUUID().withMessage("Invalid company ID"), // check if userId is a valid UUID
    param("department_id").isUUID().withMessage("Invalid company department ID"), // check if department_id is a valid UUID
    body("name").optional().notEmpty().withMessage("Name cannot be empty"), // check if name is not empty if provided
    
  ],
  delete: [
    param("company_id").isUUID().withMessage("Invalid company ID"), // check if company_id is a valid UUID
    param("department_id").isUUID().withMessage("Invalid company department ID"), // check if department_id is a valid UUID
  ],
};