import type { Logger } from "./logger.domain";

export const loggerConsole: Logger = {
  info(...args: any[]) {
    console.info(`\x1b[36m%s\x1b[0m`, `[INFO] - ${args}`)
  },

  log(...args: any[]) {
    console.info(`\x1b[32m%s\x1b[0m`, `[LOG] - ${args}`)
  },

  error(...args: any[]) {
    console.info(`\x1b[31m%s\x1b[0m`, `[ERROR] - ${args}`)
  }
}