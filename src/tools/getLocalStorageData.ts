import { storage_variables } from "../constants/defaultData"

export const getLocalStorageData = () => {
    const data = localStorage.getItem(storage_variables.data)
    const counter = localStorage.getItem(storage_variables.counter)
    return {data,counter}
}