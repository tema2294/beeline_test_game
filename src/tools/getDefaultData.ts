import {getLocalStorageData} from "./getLocalStorageData";
import {transformData} from "./transformData";
import { defaultData} from "../constants/defaultData";

export const getDefaultData = () => {

    const { data:dataFromLocalStorage,counter } = getLocalStorageData()

    const parsedData = dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : null

    const isLocalStorageDataNotEmpty = counter && parsedData && Object.keys(parsedData).length > 0

    return isLocalStorageDataNotEmpty ? {data:parsedData,counter: JSON.parse(counter)} : {data: transformData(defaultData)}
}