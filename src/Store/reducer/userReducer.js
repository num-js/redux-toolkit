import { createReducer } from "@reduxjs/toolkit";
import { UPDATE_COMPANY, UPDATE_PROFESSION, UPDATE_STATUS } from "../constants";

const initialState = {
    name: 'Numan',
    profession: 'Full Stack Dev',
    company: 'SrcLogicx',
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
    });

    builder.addCase(UPDATE_COMPANY, (state, action) => {
        state.company = action.payload
    });

    builder.addCase(UPDATE_PROFESSION, (state, action) => {
        state.profession = action.payload
    });
})

export default userReducer;