import { ADD_RESULT, ADD_STORAGE,ADD_CALCULATOR } from "./constants"


const initState ={

    calculator:'',
    result : "",

    storage:[
    ]
}

function reducer (state,action)
{
    switch(action.type){
        case ADD_STORAGE:
            return{
                ...state,
                storage:action.payload
            }
        case ADD_RESULT:
            return{
                ...state,
                result:action.payload
            }
        case ADD_CALCULATOR:
            return{
                ...state,
                calculator:action.payload
            }
        default:
            return{
                ...state,
            }
    }
}


export {initState}
export default reducer