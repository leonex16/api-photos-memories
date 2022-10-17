export interface Logger {
  info: (...args: any[]) => void;
  log: (...args: any[]) => void;
  error: (...args: any[]) => void;
}