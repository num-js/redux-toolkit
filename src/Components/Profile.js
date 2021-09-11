import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import APIRequestHelper from '../helpers/APIRequestHelper';
import { updateName, updateProfession } from '../Store/actions/userAction';
import { UPDATE_COMPANY, UPDATE_PROFESSION, UPDATE_STATUS } from '../Store/constants';

const Profile = () => {

    const { name, profession, company, status } = useSelector((state) => state);
    const dispatch = useDispatch();

    const updateStatus = (status) => {
        dispatch({ type: UPDATE_STATUS, payload: status })
    }

    const updateCompany = (company) => {
        dispatch({ type: UPDATE_COMPANY, payload: company })
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
            <button onClick={() => updateStatus('Coder')}>Update Status</button>

            &nbsp; &nbsp;
            <button onClick={() => updateCompany('W42')}>Update Company</button>

            &nbsp; &nbsp;
            <button onClick={() => updateProfessionHandler('SD1')}>Update Pro</button>

            &nbsp; &nbsp;
            <button onClick={() => updateNameHandler()}>Update Name From N.Contact Api</button>

        </>
    );
}

export default Profile;