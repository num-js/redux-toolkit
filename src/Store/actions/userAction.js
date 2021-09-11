import { UPDATE_PROFESSION } from "../constants"

const updateProfession = (updatedData) => {
    return {
        type: UPDATE_PROFESSION,
        payload: updatedData
    }
}

export default updateProfession;