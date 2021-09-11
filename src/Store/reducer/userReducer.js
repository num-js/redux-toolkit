import { createReducer } from "@reduxjs/toolkit";
import { UPDATE_STATUS } from "../constants";

const initialState = {
    name: 'Numan',
    profession: 'SD1',
    company: 'W42',
    status: 'Single'
}

//Old Redux Style
// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case UPDATE_STATUS:
//             return {
//                 ...state,
//                 status: action.payload
//             }

//         default:
//             return state;
//     }
// }

//New Redux-ToolKit Style
const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(UPDATE_STATUS, (state, action) => {
        state.status = action.payload
    })
})

export default userReducer;