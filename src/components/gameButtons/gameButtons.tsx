import {RootState} from "../../store/store";
import {getDataSelector} from "../../store/selectors/selectors";
import {connect, ConnectedProps} from "react-redux";
import {Action, Dispatch } from "@reduxjs/toolkit";
import {rootSliceActions} from "../../store/reducers/rootReducer";
import {IDataButton} from "../../store/types";
import CongratulationText from "../congratulation/congratulation";
import DataList from "../dataList/dataList";
import './style.scss'
import {useEffect} from "react";

function GameButtons(props: IGameButtons) {

    const { data,onButtonClick ,reloadGame ,setDefaultData} = props
    const dataArray  = Object.values(data)
    const isDataEmpty = dataArray.length === 0

    useEffect(()=> {
        setDefaultData()
    },[])
    return (
        <div className={'button-container'}>
            { isDataEmpty ?
                <CongratulationText reloadGame={reloadGame} />
                :
                <DataList dataArray={dataArray} onButtonClick={onButtonClick} />

            }
        </div>
    )
}

const mapState = (state: RootState) => ({
    data: getDataSelector(state),
});

const mapDispatch = (dispatch: Dispatch<Action>) => ({
    onButtonClick: (data: IDataButton)=> {
        dispatch(rootSliceActions.onButtonClick(data))
    },
    reloadGame: ()=> {
        dispatch(rootSliceActions.reloadGame())
    },
    setDefaultData: ()=> {
        dispatch(rootSliceActions.setDefaultData())
    }
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type IGameButtons = PropsFromRedux;

export default connector(GameButtons);