import { test, expect } from '@playwright/test'
test ('Find Pets by Available Status', async ({ request }) => {
    const response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available')

    console.log(await response.json())
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
    const responseBody = await response.json()

    expect(Array.isArray(responseBody)).toBe(true)
    expect(responseBody.length).toBeGreaterThan(0)
    for (const pet of responseBody) {
        expect(pet).toHaveProperty('id')
        expect(typeof pet.id).toBe('number')
        expect(pet).toHaveProperty('status')
        expect(pet.status).toBe('available')
      }
      console.log(`✅ Total pets with status 'available': ${responseBody.length}`)
    });
 
test ('Find Pets by Pending Status', async ({ request }) => {
    const response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus?status=pending')

    console.log(await response.json())
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
    const responseBody = await response.json()

    expect(Array.isArray(responseBody)).toBe(true)
    expect(responseBody.length).toBeGreaterThan(0)
    for (const pet of responseBody) {
        expect(pet).toHaveProperty('id')
        expect(typeof pet.id).toBe('number')
        expect(pet).toHaveProperty('tags')
        expect(Array.isArray(pet.tags)).toBe(true)
        expect(pet).toHaveProperty('status')
        expect(pet.status).toBe('pending')
      }
      console.log(`✅ Total pets with status 'pending': ${responseBody.length}`)
    });
