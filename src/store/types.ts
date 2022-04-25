export interface IInitialData {
    [key:string] : string
}

export interface IDataButton {
    btnName: string,
    isSelected: boolean,
    isError: boolean,
    pair: string
}

export interface ICounter {
    activeButtons: number,
    activeButtonsName: string[]
    isError?: boolean
}
export type IData = {
    [key:string]: IDataButton
}


export type IButtonClickAction = (data: IDataButton) => void




