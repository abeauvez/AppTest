import request from 'supertest';
import app from '../src/app.js';

describe('GET /', () => {
    it('should return expected payload', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({message: 'Hello from CI/CD pipeline'});
    });
});