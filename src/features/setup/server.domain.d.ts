export interface Server<RouterType> {
  listen(port?: number);
  registerRouters(): void
  createRouter(): RouterType
}