import * as moduleAction from '../action/module';

const initialState = {
    name:'',
    description:'',
    introVideo:'',
    modules: [],
    module:[]
}

export default (state= initialState, action ) => {
    switch (action.type){
        case moduleAction.SET_MODULES:
            console.log(action.courseDetails.modules);
            return{
                ...state,
                name: action.courseDetails.name,
                description: action.courseDetails.description,
                introVideo: action.courseDetails.introVideo,
                modules: action.courseDetails.modules
            };
        case moduleAction.SET_MODULE:
            return {
                ...state,
                module: action.module
            } 
        default :
        return state;    
    }
}