import './style.scss'

interface ICongratulationText {
    reloadGame: ()=>void
}
function CongratulationText (props:ICongratulationText) {
    const { reloadGame } = props
    return (
        <div>
            <h1> Поздравляю , ты победил!</h1>
            <button className={'reload_btn'} onClick={reloadGame}>Начать сначала </button>
        </div>
    )
}

export default CongratulationText