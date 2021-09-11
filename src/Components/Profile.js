import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_STATUS } from '../Store/constants';

const Profile = () => {

    const { name, profession, company, status } = useSelector((state) => state);
    const dispatch = useDispatch();

    const updateStatus = (status) => {
        dispatch({ type: UPDATE_STATUS, payload: status })
    }

    return (
        <>
            <h4>Hey, I'm {name}</h4>
            <h4>I'm {profession} at {company}</h4>
            <h4>& I'm {status} </h4>

            <br />
            <button onClick={() => updateStatus('Coder')}>Update Status</button>
        </>
    );
}

export default Profile;