import { ADD_STORAGE } from "./constants";
import { ADD_RESULT } from "./constants";
import { ADD_CALCULATOR } from "./constants";

export const addStorage = payload =>({
    type:ADD_STORAGE,
    payload
})
export const addResult = payload =>({
    type:ADD_RESULT,
    payload
})
export const addCalculator = payload =>({
    type:ADD_CALCULATOR,
    payload
})