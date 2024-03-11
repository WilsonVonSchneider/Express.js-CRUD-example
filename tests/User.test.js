const request = require('supertest');
const app = require('../web'); // this is the file where you define your app and routes

test('Validation for user create: user password must be at least 6 characters long', async () => {
    // Create a mock user object
    const mockUser = {
        email: 'yohoho@ho.ho',
        first_name: 'ee',
        last_name: 'wwww',
        password: '1234',
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/users`).send(mockUser);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Password must be at least 6 characters long");
});

test('Validation for user create: user first name must exist', async () => {
    // Create a mock user object
    const mockUser = {
        email: 'yohoho@ho.ho',
        first_name: '',
        last_name: 'wwww',
        password: '123456789',
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/users`).send(mockUser);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Name is required");
});

test('Validation for user create: user last name must exist', async () => {
    // Create a mock user object
    const mockUser = {
        email: 'yohoho@ho.ho',
        first_name: 'www',
        last_name: '',
        password: '123456789',
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/users`).send(mockUser);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Last name is required");
});

test('Validation for user create: email address must be valid', async () => {
    // Create a mock user object
    const mockUser = {
        email: 'yohoho',
        first_name: 'name',
        last_name: 'surname',
        password: '123456789',
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/users`).send(mockUser);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid email address");
});


test('Validation for user update route: invalid user ID', async () => {
    // Create a mock user object
    const mockUser = {
        email: 'yohoho@ho.ho',
        first_name: 'ee',
        last_name: 'wwww',
        password: '123456789',
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/users/1`).send(mockUser);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid user ID");
});

test('Validation for user update user: user password must be at least 6 characters long', async () => {
    // Create a mock user object
    const mockUser = {
        email: 'yohoho@ho.ho',
        first_name: 'ee',
        last_name: 'wwww',
        password: '1234',
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/users/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockUser);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Password must be at least 6 characters long");
});

test('Validation for user update user: user first name must exist', async () => {
    // Create a mock user object
    const mockUser = {
        email: 'yohoho@ho.ho',
        first_name: '',
        last_name: 'wwww',
        password: '123456789',
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/users/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockUser);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Name cannot be empty");
});

test('Validation for user update user: user last name must exist', async () => {
    // Create a mock user object
    const mockUser = {
        email: 'yohoho@ho.ho',
        first_name: 'www',
        last_name: '',
        password: '123456789',
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/users/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockUser);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Last name is required");
});

test('Validation for user update user: email address must be valid', async () => {
    // Create a mock user object
    const mockUser = {
        email: 'yohoho',
        first_name: 'name',
        last_name: 'surname',
        password: '123456789',
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/users/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockUser);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid email address");
});

test('Validation for user update user: user does not exist', async () => {
    // Create a mock user object
    const mockUser = {
        email: 'yohoho@mail.com',
        first_name: 'name',
        last_name: 'surname',
        password: '123456789',
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/users/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockUser);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(404);
});

test('Validation for user show: user does not exist', async () => {
    // Make a get request to the user route
    const response = await request(app).get(`/api/v1/users/face88ed-4992-45fe-aec7-200a07a9e66c`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(404);
});

test('Validation for user delete: user does not exist', async () => {
    // Make a delete request to the user route
    const response = await request(app).delete(`/api/v1/users/face88ed-4992-45fe-aec7-200a07a9e66c`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(404);
});

test('Validation for user update user: version v2 of the same route', async () => {
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v2/users/face88ed-4992-45fe-aec7-200a07a9e66c`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("This is version 2 of this route");
});

