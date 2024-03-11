const { connect } = require('../config/db.config');

class CompanyDepartmentRepository {

    db = {};

    constructor() {
        this.db = connect();
    }

    async create(companyData) {
        const { name, created_by, parent_id, company_id } = companyData;

        // Create a new company in the database
        const companyDepartment = await this.db.company_departments.create({
            name,
            created_by,
            parent_id,
            company_id,
        });

        // Return the created company
        return companyDepartment;
    }

    async list(company_id) {
        const companyDepartments = await this.db.view_company_departments.findAll({
            where: { company_id },
        });
        return companyDepartments;
    };

    async show(department_id, company_id) {
        const id = department_id;
        const companyDepartment = await this.db.company_departments.findOne({
            where: { id, company_id },
        });
        return companyDepartment;
    };

    async update(department_id, company_id, updatedData) {

        const id = department_id;
        
        const companyDepartment = await this.db.company_departments.findOne({
            where: { id, company_id },
        });

        // Update company department properties
        const { name } = updatedData;

        companyDepartment.name = name || companyDepartment.name;
    
        // Save the updated company department
        await companyDepartment.save();

        return companyDepartment;
    };

    async delete(department_id, company_id) {
        const id = department_id;
        const companyDepartment = await this.db.company_departments.findOne({
            where: { id, company_id },
        });
        //Update all company departments with parent_id of department that is about to be deleted
        await this.db.company_departments.update({parent_id: null},
            {where: {parent_id: id}});
        // Delete the company department
        await companyDepartment.destroy();
        return true;
    };


}

module.exports = new CompanyDepartmentRepository();