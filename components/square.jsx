import { useState } from 'react';
import circle from './assets/circle.png'
import cross from './assets/cross.png'

const Square = ({turn, setTurn, setHouseValue, winnerStatus}) => {

    const [value,setValue] = useState('') 

    const handleClick = () => {
        
        if (!value && !winnerStatus) {

            setValue(turn=='Player 1' ? cross:circle)
            setTurn(turn=='Player 1' ? 'Player 2':'Player 1')
            setHouseValue(turn=='Player 1' ? 'X':'O')
            
        }
    }

    return (
        <>
            <div className="square-wrapper">
                <button className="square-comp" onClick={handleClick}><img src={value} alt="" /></button>
            </div>
        </>
    )
}

export default Square;