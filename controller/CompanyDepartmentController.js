const companyService = require('../service/CompanyService');
const companyDepartmentService = require('../service/CompanyDepartmentService')
const { validationResult, check } = require('express-validator');

class CompanyDepartmentController {

    //Create new company in database with validation and error handling
    async create(req, res) {
        try {
            const body = req.body;
            const company_id = req.params.company_id;

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                // There are validation errors
                return res.status(400).json({ errors: errors.array() });
            }
            // Retrieve the company by ID
            const company = await companyService.show(company_id);

            // Check if the company exists
            if (!company) {
                // Company not found
                return res.status(404).json({ errors: "Company not found" });
            }
            // Add the comapny department
            const companyDepartment = await companyDepartmentService.create(company_id, body);
            return res.status(200).json(companyDepartment);
        } catch (err) {
            return res.status(500).json({ error: 'Oops, something went wrong' });
        }
    }

    async list(req, res) {
        try {
            const company_id = req.params.company_id;
            const errors = validationResult(req);

            // Check if there are validation errors
            if (!errors.isEmpty()) {
                // There are validation errors
                return res.status(400).json({ errors: errors.array() });   
            }

            // Retrieve the company by ID
            const company = await companyService.show(company_id);

            // Check if the company exists
            if (!company) {
                // Company not found
                return res.status(404).json({ errors: "Company not found" });
            }

            // Retrieve the department by ID
            const companyDepartments = await companyDepartmentService.list(company_id);

            // Company department found, return the company department in the response
            return res.status(200).json(companyDepartments);
        } catch (err) {
            return res.status(500).json({ error: 'Oops, something went wrong' });
        }
    }

    async show(req, res) {
        try {
            const company_id = req.params.company_id;
            const department_id =req.params.department_id;
            const errors = validationResult(req);

            // Check if there are validation errors
            if (!errors.isEmpty()) {
                // There are validation errors
                return res.status(400).json({ errors: errors.array() });   
            }

            // Retrieve the company by ID
            const company = await companyService.show(company_id);

            // Check if the company exists
            if (!company) {
                // Company not found
                return res.status(404).json({ errors: "Company not found" });
            }

            // Retrieve the department by ID
            const companyDepartment = await companyDepartmentService.show(department_id, company_id);

            // Check if the department exists
            if (!companyDepartment) {
                // Company department not found
                return res.status(404).json({ errors: "Company department not found" });
            }

            // Company department found, return the company department in the response
            return res.status(200).json(companyDepartment);
        } catch (err) {
            return res.status(500).json({ error: 'Oops, something went wrong' });
        }
    }

    async update(req, res) {
        try {
            const company_id = req.params.company_id;
            const department_id = req.params.department_id;
            const body = req.body;
            const errors = validationResult(req);

             // Check if there are validation errors
             if (!errors.isEmpty()) {
                // There are validation errors
                return res.status(400).json({ errors: errors.array() });
            }

            const company = await companyService.show(company_id);

            // Check if the company exists
            if (!company){
                return res.status(404).json({ errors: "Company not found" });
            }

            let companyDepartment = await companyDepartmentService.show(department_id, company_id);

            // Check if the company department exists
            if (!companyDepartment){
                return res.status(404).json({ errors: "Company department not found" });
            }
            // Update the company department
            companyDepartment = await companyDepartmentService.update(department_id, company_id, body);
    
            // Return the updated user in the response
            return res.status(200).json(companyDepartment);
        } catch (err) {
            
            return res.status(500).json({ error: 'Oops, something went wrong' });
        }
    }
    
    async delete(req, res) {
        try {
            const company_id = req.params.company_id;
            const department_id =req.params.department_id;
            const errors = validationResult(req);

             // Check if there are validation errors
             if (!errors.isEmpty()) {
                // There are validation errors
                return res.status(400).json({ errors: errors.array() });
            }

            const company = await companyService.show(company_id);
            // Check if the comapny exists
            if (!company) {
                return res.status(404).json({ errors: "Company not found" });
            }
    
            let companyDepartment = await companyDepartmentService.show(department_id, company_id);

            // Check if the company department exists
            if (!companyDepartment){
                return res.status(404).json({ errors: "Company department not found" });
            }
    
            // Delete the company department
            await companyDepartmentService.delete(department_id, company_id);
    
            // Return success message in the response
            return res.status(200).json({ message: 'Company department deleted successfully' });
        } catch (err){
            console.log(err.message);
            return res.status(500).json({ error: 'Oops, something went wrong' });
        }
    }    
}

module.exports = new CompanyDepartmentController();