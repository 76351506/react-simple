import { createStore, combineReducers } from "redux";

import IndexReducer from "./reducers/index";
import HomeReducer from "./reducers/home";

//纯函数有一个约束，不可以改变原值
//意义作用 通过监听action 传入的 动作类型 type  返回一个新的状态 state


const Reducers = combineReducers({
    IndexReducer,
    HomeReducer
})

export default createStore(Reducers)