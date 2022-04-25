import './style.scss'
import {IDataButton, IButtonClickAction } from "../../store/types";

type IButton = { btnData:IDataButton ,onButtonClick: IButtonClickAction};

function Button (props : IButton) {
    const {  btnData,onButtonClick } = props
    const { btnName, isSelected , isError} = btnData

    const handleClick = () => {
        if (!isSelected) {
            onButtonClick({...btnData,isSelected: true})
        }
    }
    const errorClassName = isError ? 'btn_error' : null
    const selectClassName = isSelected ? 'btn_active' : null
    const additionalClassName = errorClassName || selectClassName || null
    return <button onClick={handleClick} className={`${additionalClassName} btn`}>{btnName}</button>
}

export default Button