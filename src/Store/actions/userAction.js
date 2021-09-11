import { createAction } from "@reduxjs/toolkit";
import APIRequestHelper from "../../helpers/APIRequestHelper";
import { UPDATE_NAME, UPDATE_PROFESSION } from "../constants"

// In Old Redux Style
// const updateProfession = (updatedData) => {
//     return {
//         type: UPDATE_PROFESSION,
//         payload: updatedData
//     }
// }


// In new Redux-ToolKit Style
export const updateProfession = createAction(UPDATE_PROFESSION);

export const updateName = () => {
    // createAction(UPDATE_NAME)
    return async (dispatch) => {
        const res = await APIRequestHelper('get', 'get_contacts');
        const newName = res.data[0].name;

        dispatch({ type: UPDATE_NAME, payload: newName });
    }
}