import {ICounter, IData} from "../store/types";

export const saveSession = (data:IData, counter:ICounter)=> {
    localStorage.setItem('data',JSON.stringify(data))
    localStorage.setItem('counter',JSON.stringify(counter))
}