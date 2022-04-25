import {IData} from "../store/types";

export const getSortData = (data:IData) => {
    const sortedArray = Object.entries(data).sort(()=>Math.random()-0.5)
    return sortedArray.reduce((a, [key,value]) => ({ ...a, [key]: value}), {})
}