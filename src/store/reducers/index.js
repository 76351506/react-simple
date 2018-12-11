import * as TYPES from "../types";

const defaultState = {
    productList: [],
    pageNum: 0,
    favorite: "apple"
}

const IndexReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case TYPES.EAT:
            return { ...state, favorite: payload }
        case TYPES.PLUS:
            return { ...state, pageNum: state.pageNum++ }
        case TYPES.MINUS:
            return { ...state, pageNum: state.pageNum-- }
        default:
            return state
    }
}
export default IndexReducer;