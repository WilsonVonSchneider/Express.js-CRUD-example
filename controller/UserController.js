const userService = require('../service/UserService');
const { validationResult, check } = require('express-validator');

class UserController {

    // Get paginated list of all users with query parameters
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
            if (sort && !['first_name', 'last_name'].includes(sort.toLowerCase())) {
                return res.status(400).json({ error: 'Bad request' });
            }

            // Validate page and limit parameters
            if (page && isNaN(parseInt(page))) {
                return res.status(400).json({ error: 'Bad request' });
            }
            if (limit && isNaN(parseInt(limit))) {
                return res.status(400).json({ error: 'Bad request' });
            }

            // Retrieve users based on the query
            const users = await userService.paginated(query);

            // Return the users in the response
            return res.status(200).json(users);
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

    //Create new user in database with validation and error handling
    async create(req, res) {
        try {
            const body = req.body;

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                // There are validation errors
                return res.status(400).json({ errors: errors.array() });
            }
            // Check if email already exists
            const existingEmail = await userService.getUserByEmail(body.email);
            if (existingEmail) {
                return res.status(409).json({ error: 'Email already exists' });
            }

            // Add the user
            const user = await userService.create(body);
            return res.status(200).json(user);
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
            const user_id = req.params.user_id;
            const errors = validationResult(req);

            // Check if there are validation errors
            if (!errors.isEmpty()) {
                // There are validation errors
                return res.status(400).json({ errors: "Bad request" });
                
                
            }

            // Retrieve the user by ID
            const user = await userService.show(user_id);

            // Check if the user exists
            if (!user) {
                // User not found
                return res.status(404).json({ errors: "User not found" });
            }

            // User found, return the user in the response
            return res.status(200).json(user);
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
            const user_id = req.params.user_id;
            const body = req.body;
            const errors = validationResult(req);

            // Check if there are validation errors
            if (!errors.isEmpty()) {
                // There are validation errors
                return res.status(400).json({ errors: errors.array() });
            }

            let user = await userService.show(user_id);

            // Check if the user exists
            if (!user){
                return res.status(404).json({ errors: "User not found" });
            }
    
            // Update the user
            user = await userService.update(user_id, body);
    
            // Return the updated user in the response
            return res.status(200).json(user);
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
            const user_id = req.params.user_id;
            const errors = validationResult(req);

            // Check if there are validation errors
            if (!errors.isEmpty()) {
                // There are validation errors
                return res.status(400).json({ errors: errors.array() });
            }

            const user = await userService.show(user_id);

            // Check if the user exists
            if (!user) {
                return res.status(404).json({ errors: "User not found" });
            }
    
            // Delete the user
            await userService.delete(user_id);
    
            // Return success message in the response
            return res.status(200).json({ message: 'User deleted successfully' });
        } catch (err) {
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

module.exports = new UserController();