import {DataRequest, DataSuccess, DataFailure } from './action';

const fetchData = () => {
    return async (dispatch) => {
        dispatch(DataRequest());
        try{
            const response = await fetch('https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles')
            const data = await response.json()
            dispatch(DataSuccess(data));
        }catch(error){
            dispatch(DataFailure(error.message));
        }
    };
};

export default fetchData;