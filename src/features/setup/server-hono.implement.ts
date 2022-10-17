import { Hono } from 'hono';
import { Environment, ValidatedData } from 'hono/dist/hono';
import glob from 'glob';

import type { Router } from '@core/router.domain';
import { Server } from './server.domain';

export type RouterTypeHono = Hono<Environment, '/', ValidatedData>;

export class ServerHono implements Server<RouterTypeHono> {
  public readonly app = new Hono();

  public createRouter() {
    return new Hono();
  }

  public listen(port = 3000) {
    return {
      port,
      fetch: this.app.fetch,
    };
  }

  public async registerRouters() {
    const routes = glob.sync('src/features/**/*.routes.ts', { absolute: true, dot: true });
    const routerModulesPromises = routes.map((route) => import(route));
    const routerModulesResolved = await Promise.all(routerModulesPromises);

    routerModulesResolved.forEach(({ default: RouterClass }) => {
      const router = new RouterClass() as Router<RouterTypeHono>;
      const [basePath, routes] = router.register();

      this.app.route(basePath, routes);
    });
  }
}
