import * as TYPES from "../types";

const HomeReducer = (state = { classroom: "1607b" }, action) => {
    const { type, payload } = action;
    switch (type) {
        case TYPES.UPDATE_CLASSROOM:
            return { ...state, classroom: payload }
        default:
            return state
    }

}
export default HomeReducer;