const userRepository = require('../repository/UserRepository');

class UserService {

  constructor() { }

  formatResponse(query, result) {
    const { page, limit, sort, order, filter } = query;
    const { users, count, totalPages } = result;
    return {
      ...result,
      ...query,
    };
  }

  async paginated(query) {
    // Destructure query parameters
    let { page, limit, sort, order, filter, search } = query;

    // Set default limit if not provided
    limit = limit || 10;

    // Define options for retrieving users
    const options = {
      limit,
      page,
      order,
      sort,
      search,
      where: filter,
    };

    // Retrieve users and their count based on the options
    const { rows: users, count } = await userRepository.paginated(options);

    // Calculate the total number of pages based on the limit
    const totalPages = Math.ceil(count / limit);

    // Format the response with users, count, totalPages, and the current page
    return this.formatResponse(query, { users, count, totalPages, page });
  }

  async create(body) {
    // Destructure user data from the request body
    let { email, first_name, last_name, password } = body;

    // Create a user data object
    const userData = {
      email,
      first_name,
      last_name,
      password,
    };

    // Add the user to the database
    const user = await userRepository.create(userData);

    // Return the added user
    return user;
  }

  async getUserByEmail(email) {
    // Retrieve user from the database by email
    const user = await userRepository.getUserByEmail(email);
    // Return the user
    return user;
}


async show(user_id) {
    // Retrieve user from the database by ID
    const user = await userRepository.show(user_id);
    // Return the user
    return user;
}

async update(user_id, updatedData) {
    // Update user in the database with the provided data
    const user = await userRepository.update(user_id, updatedData);
    // Return the updated user
    return user;
}


async delete(user_id) {
    // Delete user from the database by ID
    await userRepository.delete(user_id);
    // Return true to indicate successful deletion
    return true;
}

}

module.exports = new UserService();