import { createAction } from "@reduxjs/toolkit";
import { UPDATE_PROFESSION } from "../constants"

// In Old Redux Style
// const updateProfession = (updatedData) => {
//     return {
//         type: UPDATE_PROFESSION,
//         payload: updatedData
//     }
// }


// In new Redux-ToolKit Style
const updateProfession = createAction(UPDATE_PROFESSION);

export default updateProfession;