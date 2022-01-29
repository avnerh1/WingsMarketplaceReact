import { combineReducers } from "redux";
import { UserReducer } from "../Reducers/Index";
import { themereducer } from "../Reducers/themereducer";
import { Searchreducer } from "../Reducers/userreducer";
const rootReducer = combineReducers({
    
    UserReducer:UserReducer,
    themereducer:themereducer,
    Usersearchss:Searchreducer,
});

export default rootReducer;