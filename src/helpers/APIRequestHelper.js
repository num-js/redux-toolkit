/*
 * Filename: APIRequestHelper.js
 * Path: zNuman\zCodes\Learning\redux-toolkit
 * Created Date: Saturday, September 11th 2021, 11:00:21 am
 * Author: Md Numan Ahmed
 * 
 * Copyright (c) 2021 Numan-Dev
*/

import axios from "axios";


/**
 * Fetch Data from the API & return Response
 * @param {String} method - HTTP requests - GET || POST || PUT || DELETE
 * @param {String} endpoint 
 * @param {Object} data 
 * @returns - {Object} - API response
 */
const APIRequestHelper = async (method = 'post', endpoint, data = null) => {
    const BASE_URL = 'https://nooglecontacts.herokuapp.com/api/';
    const accessToken = '';
    let config = {};

    if ((method === 'post' || method === 'put') && data) {
        config = {
            method: method,
            url: BASE_URL + endpoint,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            },
            data: data
        };
    }

    if (method === 'get') {
        config = {
            method: 'get',
            url: BASE_URL + endpoint,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            },
        };
    }

    let response = await axios(config)
        .catch((error) => {
            if (error.response) {
                if (error.response.data.msg) {
                    console.error('Error occur in Fetching api: ', error.response.data.msg);
                }
            }
        });

    return response;
}

export default APIRequestHelper;