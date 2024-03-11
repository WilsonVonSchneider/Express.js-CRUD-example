// CompanyValidations.js
const { body, param } = require("express-validator"); // import express validator
// export the validation rules for each route as an array
module.exports = {
  index: [], // no validation rules for index route
  show: [
    param("company_id").isUUID().withMessage("Invalid company ID"), // check if company_id is a valid UUID
  ],
  store: [
    body("handle").notEmpty().withMessage("handle is required"), // check if handle is not empty
    body('name').notEmpty().withMessage('Name is required'),
    body('website').notEmpty().withMessage('Website is required'),
    body('country').notEmpty().withMessage('Country is required'),
    body('topics').notEmpty().withMessage('Topics are required'),
    body('created_by').notEmpty().isUUID.apply('Invalid user ID'),
  ],
  update: [
    param("company_id").isUUID().withMessage("Invalid user ID"), // check if userId is a valid UUID
    body("handle").optional().notEmpty().withMessage("Handle cannot be empty"), // check if handle is not empty if provided
    body("name").optional().notEmpty().withMessage("Name cannot be empty"), // check if name is not empty if provided
    body("website").optional().notEmpty().withMessage("Website cannot be empty"), // check if website is not empty if provided
    body("country").optional().notEmpty().withMessage("Country cannot be empty"), // check if country is not empty if provided
    body("topics").optional().notEmpty().withMessage("Topics cannot be empty"), // check if topics are not empty if provided
  ],
  delete: [
    param("company_id").isUUID().withMessage("Invalid user ID"), // check if userId is a valid UUID
  ],
};