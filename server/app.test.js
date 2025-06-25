const request = require('supertest')
const app = require('./app')


describe('app', () => {
  describe('GET /api', () => {
    it('returns a greeting', async () => {
      const {body} = await request(app)
        .get('/api')

      expect(body.greeting).toBe('Hello World')
    })
  })
})