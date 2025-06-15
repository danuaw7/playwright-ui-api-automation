import { test,expect } from '@playwright/test'

test('Add a new pet to the store', async ({ request }) => {
    const response = await request.post(`https://petstore.swagger.io/v2/pet`, {
        data: 
        {
            "id": 0,
            "category": {
              "id": 0,
              "name": "string"
            },
            "name": "doggie",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          }
    });
    console.log(await response.json())
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    
    expect(typeof responseBody.id).toBe('number')
    expect(responseBody.id).toBeGreaterThan(0)
    expect(responseBody).toHaveProperty('category')
    expect(responseBody.category).toMatchObject({ id: 0, name: 'string' })
    expect(responseBody.name).toBe('doggie')
    expect(Array.isArray(responseBody.photoUrls)).toBe(true)
    expect(responseBody.photoUrls[0]).toBe('string')
    expect(Array.isArray(responseBody.tags)).toBe(true)
    expect(responseBody.tags[0]).toMatchObject({ id: 0, name: 'string' })
    expect(responseBody.status).toBe('available')
});
