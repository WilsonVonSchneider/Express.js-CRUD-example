const companyService = require('../service/CompanyService');
const { validationResult, check } = require('express-validator');

class CompanyController {

    // Get paginated list of all comapnies with query parameters
    async paginated(req, res) {
        try {
            const query = req.query;

            // Validate query parameters
            const { order, sort, page, limit } = query;

            // Validate order parameter
            if (order && !['ASC', 'DESC'].includes(order.toUpperCase())) {
                return res.status(400).json({ error: 'Bad request' });
            }

            // Validate sort_by parameter
            if (sort && !['name', 'handle'].includes(sort.toLowerCase())) {
                return res.status(400).json({ error: 'Bad request' });
            }

            // Validate page and limit parameters
            if (page && isNaN(parseInt(page))) {
                return res.status(400).json({ error: 'Bad request' });
            }
            if (limit && isNaN(parseInt(limit))) {
                return res.status(400).json({ error: 'Bad request' });
            }

            // Retrieve companies based on the query
            const companies = await companyService.paginated(query);

            // Return the companies in the response
            return res.status(200).json(companies);
        } catch (err) {
            return res.status(500).json({ err: 'Oops, something went wrong' });
        }
    }

    //version V2 of paginated route
    async paginatedV2(req, res){
        try{return res.json({message: "This is version 2 of this route"})}
        catch(err){
            return res.status(500).json({ err: 'Oops, something went wrong' });
        }    
    }

    //Create new company in database with validation and error handling
    async create(req, res) {
        try {
            const body = req.body;

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                // There are validation errors
                return res.status(400).json({ errors: errors.array() });
            }
            // Add the user
            const company = await companyService.create(body);
            return res.status(200).json(company);
        } catch (err) {
            return res.status(500).json({ error: 'Oops, something went wrong' });
        }
    }

    //version V2 of create route
    async createV2(req, res){
        try{return res.json({message: "This is version 2 of this route"})}
        catch(err){
            return res.status(500).json({ err: 'Oops, something went wrong' });
        }        
    }

    async show(req, res) {
        try {
            const company_id = req.params.company_id;
            const errors = validationResult(req);

            // Check if there are validation errors
            if (!errors.isEmpty()) {
                // There are validation errors
                return res.status(400).json({ errors: "Bad request" });   
            }

            // Retrieve the company by ID
            const company = await companyService.show(company_id);

            // Check if the company exists
            if (!company) {
                // User not found
                return res.status(404).json({ errors: "Company not found" });
            }

            // Company found, return the company in the response
            return res.status(200).json(company);
        } catch (err) {
            return res.status(500).json({ error: 'Oops, something went wrong' });
        }
    }

    //version V2 of show route
    async showV2(req, res){
        try{return res.json({message: "This is version 2 of this route"})}
        catch(err){
            return res.status(500).json({ err: 'Oops, something went wrong' });
        }  
    }

    async update(req, res) {
        try {
            const company_id = req.params.company_id;
            const body = req.body;
            const errors = validationResult(req);

            // Check if there are validation errors
            if (!errors.isEmpty()) {
                // There are validation errors
                return res.status(400).json({ errors: errors.array() });
            }

            let company = await companyService.show(company_id);

            // Check if the company exists
            if (!company){
                return res.status(404).json({ errors: "Company not found" });
            }
    
            // Update the company
            company = await companyService.update(company_id, body);
    
            // Return the updated user in the response
            return res.status(200).json(company);
        } catch (err) {
            return res.status(500).json({ error: 'Oops, something went wrong' });
        }
    }

    //version V2 of update route
    async updateV2(req, res){
        try{return res.json({message: "This is version 2 of this route"})}
        catch(err){
            return res.status(500).json({ err: 'Oops, something went wrong' });
        }
    }
    

    async delete(req, res) {
        try {
            const company_id = req.params.company_id;
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
    
            // Delete the user
            await companyService.delete(company_id);
    
            // Return success message in the response
            return res.status(200).json({ message: 'Company deleted successfully' });
        } catch (err){
            return res.status(500).json({ error: 'Oops, something went wrong' });
        }
    }

     //version V2 of delete route
     async deleteV2(req, res){
        try{return res.json({message: "This is version 2 of this route"})}
        catch(err){
            return res.status(500).json({ err: 'Oops, something went wrong' });
        }
    }
    
}

module.exports = new CompanyController();