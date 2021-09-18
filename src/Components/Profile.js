import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import APIRequestHelper from '../helpers/APIRequestHelper';
import { updateName, updateProfession } from '../Store/actions/userAction';
import { UPDATE_COMPANY, UPDATE_STATUS } from '../Store/constants';
import { generateRandomFrnd, updateCompany, updateStatus } from '../Store/reducer/userReducer';

const Profile = () => {

    const { name, profession, company, status, frndName } = useSelector((state) => state);
    const dispatch = useDispatch();

    const updateStatusHandler = (status) => {
        // dispatch({ type: UPDATE_STATUS, payload: status })

        /**
         * By Adding createSlice in Reducer, no need to Dispatch any action.
         * Now Directly dispatch the Reducer, & createSlice handle actions internally.
         * Actions be like - 'users/updateStatus' ===> [reducer name/reducerfunctionname]
         */
        dispatch(updateStatus(status));
    }

    const updateCompanyHandler = (company) => {
        // dispatch({ type: UPDATE_COMPANY, payload: company })
        dispatch(updateCompany('X2A'))
    }

    const updateProfessionHandler = (profession) => {
        dispatch(updateProfession(profession));
    }

    const updateNameHandler = async () => {
        dispatch(updateName());
    }

    return (
        <>
            <h4>Hey, I'm {name}</h4>
            <h4>I'm {profession} at {company}</h4>
            <h4>& I'm {status} </h4>

            <br />
            <button onClick={() => updateStatusHandler('Bechara Coder')}>Update Status</button>

            &nbsp; &nbsp;
            <button onClick={() => updateCompanyHandler('W42')}>Update Company</button>

            &nbsp; &nbsp;
            <button onClick={() => updateProfessionHandler('SD1')}>Update Pro</button>

            &nbsp; &nbsp;
            <button onClick={() => updateNameHandler()}>Update Name From N.Contact Api</button>

            <br />
            <br />
            <br />

            <div align="center">
                <span><button onClick={() => dispatch(generateRandomFrnd())}>Generate Random Frnd</button></span> <span>{frndName}</span>
            </div>

        </>
    );
}

export default Profile;