import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {

    const { name, profession, company, status } = useSelector((state) => state);

    return (
        <>
            <h4>Hey, I'm {name}</h4>
            <h4>I'm {profession} at {company}</h4>
            <h4>& I'm {status} </h4>
        </>
    );
}

export default Profile;