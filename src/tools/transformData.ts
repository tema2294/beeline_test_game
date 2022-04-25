import {IData, IInitialData} from "../store/types";
import { getSortData } from "./getSortData";

export const transformData = (data: IInitialData):IData => {

    const result:IData = {}

    for (let key in data) {
        result[key] = {btnName: key, pair: data[key],isSelected: false,isError: false }
        result[data[key]] = {btnName: data[key],pair: key,isSelected: false,isError: false}
    }
    const randomizedDate = getSortData(result)
    return randomizedDate
}