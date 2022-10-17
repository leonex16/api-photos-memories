import { Server } from '@features/setup'
import type { RouterType } from '@features/setup'
import { SUCCESSFUL } from '@constants/http-status-code'
import { logger } from '@utils/logger'
import { Router } from 'core/router.domain'
import packageJson from '../../../package.json'

export default class HealthRouter implements Router<RouterType> {
  public readonly router: RouterType;
  public readonly basePath: string = '/health'

  constructor() {
    const server = new Server()
    this.router = server.createRouter()
  }

  register(): [string, RouterType] {
    logger.info('Registering Health Routes')

    this.router.get('/', ctx => {
      ctx.status(SUCCESSFUL)
    
      return ctx.body('Ok - Version App ' + packageJson.version)
    })

    return [this.basePath ,this.router]
  }
}