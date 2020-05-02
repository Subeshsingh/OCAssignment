import Axios from "axios";

export const SET_MODULES = 'SET_MODULES';
export const SET_MODULE  = 'SET_MODULE';

export const setModules = (data) => {
    return {
        type: SET_MODULES,
        courseDetails: data
    }
}

export const getModule = ( moduleId ) =>{
    return dispatch =>{
        const url = `https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy&moduleId=${moduleId}`;
        const headers = {
            'hk-access-token': '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f'
        }

        Axios.get(url,{headers})
        .then(response =>{
            console.log(moduleId);
            console.log(response.data.lessonDetails[0].userChapterDetails);
            let xyz =response.data.lessonDetails[0].userChapterDetails.sort((a,b)=>{
                return (a.displayOrder - b.displayOrder);
            })
            console.log(xyz);
            dispatch({type: SET_MODULE, module: xyz});
        }).catch(err=>{
            throw err;
        })

    }
}
export const initModules = () => {
    return dispatch =>{
        const url = 'https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy';
        const headers = {
            'hk-access-token': '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f'
        }

        Axios.get(url,{headers})
        .then(response =>{
            console.log(response.data.courseDetails);
            dispatch(setModules(response.data.courseDetails));
        }).catch(err=>{
            throw err;
        })
    }
} 