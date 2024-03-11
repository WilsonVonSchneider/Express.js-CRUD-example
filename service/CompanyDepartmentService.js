const companyDepartmentRepository = require('../repository/CompanyDepartmentRepository');

class CompanyDepartmentService {

  constructor() { }

  async create(company_id, body) {
    // Destructure company data from the request body
    let { name, created_by, parent_id } = body;

    // Create a company data object
    const companyDepartmentData = {
      name,
      created_by,
      parent_id,
      company_id,
    };

    // Add the company department to the database
    const companyDepartment = await companyDepartmentRepository.create(companyDepartmentData);

    // Return the added company department
    return companyDepartment;
  }

  async list(company_id) {
    // Retrieve company departments from the database by ID
    const companyDepartments = await companyDepartmentRepository.list(company_id);
    // Return the company departments
    return companyDepartments;
}

async show(department_id, company_id) {
    // Retrieve company department from the database by ID
    const companyDepartment = await companyDepartmentRepository.show(department_id, company_id);
    // Return the company department
    return companyDepartment;
}

async update(department_id, company_id, updatedData) {
    
    // Update company in the database with the provided data
    const companyDepartment = await companyDepartmentRepository.update(department_id, company_id, updatedData);
    // Return the updated company department
    return companyDepartment;
}


async delete(department_id, company_id) {
    // Delete company department from the database by ID
    await companyDepartmentRepository.delete(department_id, company_id);
    // Return true to indicate successful deletion
    return true;
}

}

module.exports = new CompanyDepartmentService();