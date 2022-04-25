import {ICounter, IDataButton} from "../store/types";
import {default_counter} from "../constants/defaultData";
import {PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

export const buttonClickHelper = (state:RootState,action:PayloadAction<IDataButton>)=> {
    let counter = {...state.counter}
    const { btnName } = action.payload
    const { activeButtons  } = counter

    if (activeButtons === 1) {
        return secondCase(state,action,btnName)
    } else {
        return firstCase(state,action,btnName, activeButtons)
    }

}

const firstCase = (state:RootState,action:PayloadAction<IDataButton>,btnName:string,activeButtons:number)=> {
    const data = {...state.data}
    let counter = {...state.counter}
    const { activeButtonsName } = counter

    data[btnName] = action.payload
    counter = {
        activeButtons: 1,
        activeButtonsName: [btnName]
    }

    if (activeButtons === 2 ) {
        activeButtonsName.forEach((btnName) => {
            data[btnName] = {...data[btnName],isError:false}
        })
    }
    return { data,counter }
}

const secondCase = (state:RootState,action:PayloadAction<IDataButton>,btnName:string)=> {
    const data = {...state.data}
    let counter = {...state.counter}
    const { activeButtonsName } = counter

    const updatedCounter:ICounter = {
        activeButtons: 2,
        activeButtonsName : [...activeButtonsName,btnName],
    }

    const {activeButtonsName: updatedActiveButtonsName} = updatedCounter
    const [firstActiveBtn,secondActiveBtn]  = updatedActiveButtonsName

    const { pair: pairName } = data[firstActiveBtn] //keys for 1 object
    const { btnName: pairValue } = data[secondActiveBtn] //key of the second object

    const isError = pairName !== pairValue //check the buttons for an error

    updatedActiveButtonsName.forEach((btnName) => {
        if (isError) {
            data[btnName] = {...data[btnName],isError,isSelected: false}
            counter = updatedCounter
        } else {
            delete data[btnName]
            counter = default_counter
        }
    })
    return { data,counter }
}