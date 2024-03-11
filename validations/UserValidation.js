// userValidations.js
const { body, param } = require("express-validator"); // import express validator
// export the validation rules for each route as an array
module.exports = {
  index: [], // no validation rules for index route
  show: [
    param("user_id").isUUID().withMessage("Invalid user ID"), // check if userId is a valid UUID
  ],
  store: [
    body("first_name").notEmpty().withMessage("Name is required"), // check if name is not empty
    body('last_name').notEmpty().withMessage('Last name is required'),
    body("email").isEmail().withMessage("Invalid email address"), // check if email is a valid email address
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"), // check if password is at least 6 characters long
  ],
  update: [
    param("user_id").isUUID().withMessage("Invalid user ID"), // check if userId is a valid UUID
    body("first_name").optional().notEmpty().withMessage("Name cannot be empty"), // check if name is not empty if provided
    body('last_name').notEmpty().withMessage('Last name is required'),
    body("email").optional().isEmail().withMessage("Invalid email address"), // check if email is a valid email address if provided
    body("password")
      .optional()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"), // check if password is at least 6 characters long if provided
  ],
  delete: [
    param("user_id").isUUID().withMessage("Invalid user ID"), // check if userId is a valid UUID
  ],
};