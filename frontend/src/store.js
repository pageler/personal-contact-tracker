import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import {
    contactCreateReducer,
    contactDeleteReducer,
    contactListReducer,
    contactUpdateReducer,
} from "./reducers/contactsReducers";

const reducer = combineReducers({
    // list reducers
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    contactList: contactListReducer,
    contactCreate: contactCreateReducer,
    contactUpdate: contactUpdateReducer,
    contactDelete: contactDeleteReducer,
});

const userInfoFormStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const initialState = {
    userLogin: { userInfo: userInfoFormStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
