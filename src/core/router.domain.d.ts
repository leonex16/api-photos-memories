export interface Router<RouterType> {
  register(): [string, RouterType] 
}