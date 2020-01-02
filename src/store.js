import MovieAppReducer from "./reducers/reducer"
import {createStore} from "redux"


const store= createStore(MovieAppReducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store