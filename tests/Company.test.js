const request = require('supertest');
const app = require('../web'); // this is the file where you define your app and routes

test('Validation for company create: handle must exists', async () => {
    // Create a mock company object
    const mockCompany = {
        handle: '',
        name: 'test1',
        website: 'wwww.ww.com',
        country: 'Bosna',
        topics: ['nista'],
        created_by: "face88ed-4992-45fe-aec7-200a07a9e66c"
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/companies`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("handle is required");
});

test('Validation for company create: name must exists', async () => {
    // Create a mock company object
    const mockCompany = {
        handle: 'ee',
        name: '',
        website: 'wwww.ww.com',
        country: 'Bosna',
        topics: ['nista'],
        created_by: "face88ed-4992-45fe-aec7-200a07a9e66c"
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/companies`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Name is required");
});

test('Validation for company create: website must exists', async () => {
    // Create a mock company object
    const mockCompany = {
        handle: 'ee',
        name: 'ee',
        website: '',
        country: 'Bosna',
        topics: ['nista'],
        created_by: "face88ed-4992-45fe-aec7-200a07a9e66c"
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/companies`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Website is required");
});

test('Validation for company create: country must exists', async () => {
    // Create a mock company object
    const mockCompany = {
        handle: 'ee',
        name: 'ee',
        website: 'www.www.com',
        country: '',
        topics: ['nista'],
        created_by: "face88ed-4992-45fe-aec7-200a07a9e66c"
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/companies`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Country is required");
});

test('Validation for company create: topics must exists', async () => {
    // Create a mock company object
    const mockCompany = {
        handle: 'ee',
        name: 'ee',
        website: 'www.www.com',
        country: 'Bosna',
        topics: '',
        created_by: "face88ed-4992-45fe-aec7-200a07a9e66c"
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/companies`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Topics are required");
});

test('Validation for company create: created by must be valid UUID', async () => {
    // Create a mock company object
    const mockCompany = {
        handle: 'ee',
        name: 'ee',
        website: 'www.www.com',
        country: 'Bosna',
        topics: ['nista'],
        created_by: ''
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).post(`/api/v1/companies`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Invalid value");
});

test('Validation for company update: handle must exists', async () => {
    // Create a mock company object
    const mockCompany = {
        handle: '',
        name: 'test1',
        website: 'wwww.ww.com',
        country: 'Bosna',
        topics: ['nista']
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Handle cannot be empty");
});

test('Validation for company update: name must exists', async () => {
    // Create a mock company object
    const mockCompany = {
        handle: 'ee',
        name: '',
        website: 'wwww.ww.com',
        country: 'Bosna',
        topics: ['nista']
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Name cannot be empty");
});

test('Validation for company update: website must exists', async () => {
    // Create a mock company object
    const mockCompany = {
        handle: 'ee',
        name: 'ee',
        website: '',
        country: 'Bosna',
        topics: ['nista']
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Website cannot be empty");
});

test('Validation for company update: country must exists', async () => {
    // Create a mock company object
    const mockCompany = {
        handle: 'ee',
        name: 'ee',
        website: 'www.www.com',
        country: '',
        topics: ['nista']
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Country cannot be empty");
});

test('Validation for company post: topics must exists', async () => {
    // Create a mock company object
    const mockCompany = {
        handle: 'ee',
        name: 'ee',
        website: 'www.www.com',
        country: 'Bosna',
        topics: ''
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(400);
    expect(response.body.errors[0].msg).toBe("Topics cannot be empty");
});

test('Validation for company post: company does not exist', async () => {
    // Create a mock company object
    const mockCompany = {
        handle: 'ee',
        name: 'ee',
        website: 'www.www.com',
        country: 'Bosna',
        topics: ['nista'],
        // ... other fields
    };
    // Make a put request to the user route with the mock user id and object
    const response = await request(app).put(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c`).send(mockCompany);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(404);
});

test('Validation for company show: company does not exist', async () => {
    // Make a get request to the user route
    const response = await request(app).get(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(404);
});

test('Validation for company delete: company does not exist', async () => {
    // Make a delete request to the user route
    const response = await request(app).delete(`/api/v1/companies/face88ed-4992-45fe-aec7-200a07a9e66c`);
    // Assert
    // Expect that the response status is 400
    expect(response.status).toBe(404);
});
