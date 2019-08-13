import HomeStore from './home'
import DetailsStore from './details'
import Todo from "./todo"

let home = new HomeStore()
let details = new DetailsStore() 
let todo = new Todo()

export {home,details,todo}