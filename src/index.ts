import { Server } from '@features/setup'

const server = new Server()

await server.registerRouters()

export default server.listen();
