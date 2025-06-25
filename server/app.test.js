const request = require('supertest')
const app = require('./app')


describe('app', () => {
  describe('GET /', () => {
    it('returns a greeting', async () => {
      const {body} = await request(app)
        .get('/')

      expect(body.greeting).toBe('Hello World')
    })
  })
})