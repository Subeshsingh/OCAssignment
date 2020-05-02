import * as expertAction from '../action/expert';

const initialState = {
    experts: []
}

export default (state= initialState, action ) => {
    switch (action.type){
        case expertAction.SET_EXPERTS:
            return{
                experts: action.experts.expertDetails
            } 
        default :
        return state;    
    }
}