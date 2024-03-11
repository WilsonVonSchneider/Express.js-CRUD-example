const request = require('supertest');
const app = require('../web'); // this is the file where you define your app and routes

test('Validation for company department create: name must exists', async () => {
    // Create a mock company object
    const mockCompany = {
        name: '',
        created_by: "face88ed-4992-45fe-aec7-200a07a9e66c"
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c/departments`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Name is required");
});

test('Validation for company department create: created_by must be UUID', async () => {
    // Create a mock company object
    const mockCompany = {
        name: 'dep',
        created_by: ""
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c/departments`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid value");
});

test('Validation for company department create: parent_id must be UUID', async () => {
    // Create a mock company object
    const mockCompany = {
        name: 'dep',
        created_by: "face88ed-4992-45fe-aec7-200a07a9e66c",
        parent_id: ""
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c/departments`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid value");
});

test('Validation for company department create: invalid company UUID', async () => {
    // Create a mock company object
    const mockCompany = {
        name: 'dep',
        created_by: "face88ed-4992-45fe-aec7-200a07a9e66c"
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/companies/123/departments`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid company ID");
});

test('Validation for company department create: company does not exist', async () => {
    // Create a mock company object
    const mockCompany = {
        name: 'dep',
        created_by: "face88ed-4992-45fe-aec7-200a07a9e66c"
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c/departments`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(404);
});

test('Validation for company department update: name must exists', async () => {
    // Create a mock company object
    const mockCompany = {
        name: ''
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c/departments/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Name cannot be empty");
});

test('Validation for company department update: company does not exist', async () => {
    // Create a mock company object
    const mockCompany = {
        name: 'dep',
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c/departments/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(404);
});

test('Validation for company department update: company departmnet does not exist', async () => {
    // Create a mock company object
    const mockCompany = {
        name: 'dep',
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/companies/1304ca74-d752-4358-a14e-bc4ac7a4e363/departments/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(404);
});

test('Validation for company department update: invalid company UUID', async () => {
    // Create a mock company object
    const mockCompany = {
        name: 'dep'
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/companies/123/departments/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid company ID");
});

test('Validation for company department update: invalid company department UUID', async () => {
    // Create a mock company object
    const mockCompany = {
        name: 'dep'
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c/departments/123`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid company department ID");
});

test('Validation for company department delete: company does not exist', async () => {
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).delete(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c/departments/face88ed-4992-45fe-aec7-200a07a9e66c`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(404);
});

test('Validation for company department delete: company departmnet does not exist', async () => {
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).delete(`/api/v1/companies/1304ca74-d752-4358-a14e-bc4ac7a4e363/departments/face88ed-4992-45fe-aec7-200a07a9e66c`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(404);
});

test('Validation for company department delete: invalid company UUID', async () => {

    // Make a put request to the user route with the mock user id and object
    const response = await request(app).delete(`/api/v1/companies/123/departments/face88ed-4992-45fe-aec7-200a07a9e66c`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid company ID");
});

test('Validation for company department delete: invalid company department UUID', async () => {
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).delete(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c/departments/123`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid company department ID");
});

test('Validation for company department show: company does not exist', async () => {
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).get(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c/departments/face88ed-4992-45fe-aec7-200a07a9e66c`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(404);
});

test('Validation for company department show: company departmnet does not exist', async () => {
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).get(`/api/v1/companies/1304ca74-d752-4358-a14e-bc4ac7a4e363/departments/face88ed-4992-45fe-aec7-200a07a9e66c`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(404);
});

test('Validation for company department show: invalid company UUID', async () => {

    // Make a put request to the user route with the mock user id and object
    const response = await request(app).get(`/api/v1/companies/123/departments/face88ed-4992-45fe-aec7-200a07a9e66c`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid company ID");
});

test('Validation for company department show: invalid company department UUID', async () => {
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).get(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c/departments/123`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid company department ID");
});

test('Validation for company department list: company does not exist', async () => {
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).get(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c/departments`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(404);
});

test('Validation for company department list: invalid company UUID', async () => {

    // Make a put request to the user route with the mock user id and object
    const response = await request(app).get(`/api/v1/companies/123/departments`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid company ID");
});