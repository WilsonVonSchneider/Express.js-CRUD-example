const { connect } = require('../config/db.config');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
class UserRepository {

  db = {};

  constructor() {
    this.db = connect();
  }

  async paginated(options) {
    let { page, limit, search, sort, order, filter } = options;

    // Pagination parameters
    const pageNumber = parseInt(page) || 1;
    const pageSize = parseInt(limit);
    const offset = (pageNumber - 1) * pageSize;

    // Search parameter
    const searchQuery = search || '';

    // Sort parameter
    sort = sort || 'id';
    order = order || 'DESC';
    const sortBy = [[sort, order]];

    const query = {
      where: {
        first_name: { [Op.like]: `%${searchQuery}%` }
      },
      order: sortBy,
      limit: pageSize,
      offset: offset,
    };

    // Find and count all users based on the query
    const users = await this.db.users.findAndCountAll(query);

    // Return the users
    return users;
  }

  async create(userData) {
    const { email, first_name, last_name, password } = userData;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database with the hashed password
    const user = await this.db.users.create({
      email: email.toLowerCase(), // Normalize email to lowercase
      first_name,
      last_name,
      password: hashedPassword,
    });

    // Return the created user
    return user;
  }

  async getUserByEmail(email) {
    // Find a user with the given email
    const user = await this.db.users.findOne({
      where: { email },
    });
    // Return the user
    return user;
  }

  async show(user_id) {
      const id =user_id;
      const user = await this.db.users.findOne({
        where: { id },
      });
      return user;
  };

  async update(user_id, updatedData) {
    const id =user_id;
    const user = await this.db.users.findOne({
      where: { id },
    });
    
      // Update user properties
      const { first_name, last_name, password } = updatedData;

      // Hash the password if provided
      let hashedPassword = user.password;
      if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
      }

      user.first_name = first_name || user.first_name;
      user.last_name = last_name || user.last_name;
      user.password = hashedPassword;

      // Save the updated user
      await user.save();

      return user;
  };

  async delete(user_id) {
    const id =user_id;
    const user = await this.db.users.findOne({
      where: { id },
    });
      // Delete the user
      await user.destroy();
      return true;
  };


}

module.exports = new UserRepository();