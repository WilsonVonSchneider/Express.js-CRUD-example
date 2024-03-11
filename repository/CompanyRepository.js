const { connect } = require('../config/db.config');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
class CompanyRepository {

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
                name: { [Op.like]: `%${searchQuery}%` }
            },
            order: sortBy,
            limit: pageSize,
            offset: offset,
        };

        // Find and count all companies based on the query
        const companies = await this.db.companies.findAndCountAll(query);

        // Return the companies
        return companies;
    }

    async create(companyData) {
        const { handle, name, website, country, topics, created_by } = companyData;

        // Create a new company in the database
        const company = await this.db.companies.create({
            handle,
            name,
            website,
            country,
            topics,
            created_by,
        });

        // Return the created company
        return company;
    }

    async show(company_id) {
        const id = company_id;
        const company = await this.db.companies.findOne({
            where: { id },
        });
        return company;
    };

    async update(company_id, updatedData) {

        const id = company_id;
        const company = await this.db.companies.findOne({
            where: { id },
        });

        // Update company properties
        const { handle, name, website, country, topics, created_by } = updatedData;

        company.handle = handle || company.handle;
        company.name = name || company.name;
        company.website = website || company.website;
        company.country = country || company.country;
        company.topics = topics || company.topics;
        company.created_by = created_by || company.created_by;

        // Save the updated company
        await company.save();

        return company;
    };

    async delete(company_id) {
        const id = company_id;
        const company = await this.db.companies.findOne({
            where: { id },
        });
        // Delete the company
        await company.destroy();
        return true;
    };


}

module.exports = new CompanyRepository();