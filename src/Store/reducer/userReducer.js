import { UPDATE_STATUS } from "../constants";

const initialState = {
    name: 'Numan',
    profession: 'SD1',
    company: 'W42',
    status: 'Single'
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;