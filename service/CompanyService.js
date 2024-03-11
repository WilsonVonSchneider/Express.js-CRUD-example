const companyRepository = require('../repository/CompanyRepository');

class CompanyService {

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

    // Retrieve companies and their count based on the options
    const { rows: companies, count } = await companyRepository.paginated(options);

    // Calculate the total number of pages based on the limit
    const totalPages = Math.ceil(count / limit);

    // Format the response with companies, count, totalPages, and the current page
    return this.formatResponse(query, { companies, count, totalPages, page });
  }

  async create(body) {
    // Destructure company data from the request body
    let { handle, name, website, country, topics, created_by } = body;

    // Create a company data object
    const companyData = {
      handle,
      name,
      website,
      country,
      topics,
      created_by,
    };

    // Add the company to the database
    const company = await companyRepository.create(companyData);

    // Return the added company
    return company;
  }

async show(company_id) {
    // Retrieve company from the database by ID
    const company = await companyRepository.show(company_id);
    // Return the company
    return company;
}

async update(company_id, updatedData) {
    // Update company in the database with the provided data
    const company = await companyRepository.update(company_id, updatedData);
    // Return the updated company
    return company;
}


async delete(company_id) {
    // Delete company from the database by ID
    await companyRepository.delete(company_id);
    // Return true to indicate successful deletion
    return true;
}

}

module.exports = new CompanyService();