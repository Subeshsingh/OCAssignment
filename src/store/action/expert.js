import Axios from "axios";

export const SET_EXPERTS = 'SET_EXPERTS';

const setExperts = (data) => {
    return{
        type: SET_EXPERTS,
        experts: data
    }
}

export const initExperts = () => {
    return dispatch =>{
        const url = 'https://stgapi.omnicuris.com/api/v3/courses/thyroid-in-pregnancy/experts';
        const headers = {
            'hk-access-token': '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f'
        }

        Axios.get(url,{headers})
        .then(response =>{
            console.log(response.data);
            dispatch(setExperts(response.data));
        }).catch(err=>{
            throw err;
        })
    }
} 