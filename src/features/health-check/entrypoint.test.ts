import { describe, expect, it } from 'bun:test'
import { Server } from '@features/setup'

const server = new Server()
await server.registerRouters()

describe('Health Check Router', () => {
  it('Should return 200 Response', async () => {
    const req = new Request('http://localhost/health')
    const res = await server.app.fetch(req)

    expect(res.status).toBe(200)
  })
})