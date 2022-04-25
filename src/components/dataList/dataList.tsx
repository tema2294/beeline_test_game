import {IButtonClickAction, IDataButton} from '../../store/types'
import Button from "../button/button";

interface IDataList {
    dataArray: IDataButton[],onButtonClick: IButtonClickAction
}
function DataList (props: IDataList) {
    const { dataArray,onButtonClick } = props
    return  (
        <>
            {dataArray.map((btnData) => <Button key={btnData.btnName} btnData={btnData} onButtonClick={onButtonClick}/>)}
        </>
    )
}

export default DataList