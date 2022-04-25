import { createSlice,PayloadAction } from '@reduxjs/toolkit'

import {ICounter, IData, IDataButton} from "../types";
import {defaultData, default_counter} from "../../constants/defaultData";
import {transformData} from "../../tools/transformData";
import {getUpdatedState} from "../../tools/buttonClickHelper";
import {saveSession} from "../../tools/saveSession";
import {getDefaultData} from "../../tools/getDefaultData";


export interface CounterState {
    isLoading: boolean,
    data: IData,
    counter: ICounter
}

const initialState: CounterState = {
    isLoading: true,
    data: {},
    counter: default_counter
}

export const rootSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {
        setData: (state,action:PayloadAction<IData>) => {
            state.data = action.payload
        },
        onButtonClick: (state,action:PayloadAction<IDataButton>) => {

            const { data,counter } = getUpdatedState(state,action)

            state.data = data
            state.counter = counter

            saveSession(data,counter)
        },
        reloadGame: (state)=> {
            return {...initialState,data: transformData(defaultData)}
        },
        setDefaultData: (state) => {
            const {data,counter} = getDefaultData()

            if (data) {
                state.data = data
            }
            if (counter) {
                state.counter = counter
            }
        }
    },
})

export const rootSliceActions = rootSlice.actions
