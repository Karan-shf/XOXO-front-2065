import React,{useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Square from './square';
import './game.css'

const Game = () => {
    const location = useLocation();
    const { playerOne, playerTwo } = location.state || {};
    const [turn,setTurn] = useState('Player 1');
    const [isWinnerFound,setWinnerStatus] = useState(false);
    
    const [house1value,sethouse1value] = useState('');
    const [house2value,sethouse2value] = useState('');
    const [house3value,sethouse3value] = useState('');
    const [house4value,sethouse4value] = useState('');
    const [house5value,sethouse5value] = useState('');
    const [house6value,sethouse6value] = useState('');
    const [house7value,sethouse7value] = useState('');
    const [house8value,sethouse8value] = useState('');
    const [house9value,sethouse9value] = useState('');

    useEffect(() => {
        check_for_winner();
    },[
        house1value, 
        house2value, 
        house3value, 
        house4value, 
        house5value, 
        house6value, 
        house7value, 
        house8value, 
        house9value]
    )

    const check_for_winner = () => {
        
        if (!isWinnerFound) {
            
            if (house1value=='X' && house2value=='X' && house3value=='X') {
                setWinnerStatus(true);
                submit_data('Player 1');
                return
            }
            if (house4value=='X' && house5value=='X' && house6value=='X') {
                setWinnerStatus(true);
                submit_data('Player 1');
                return
            }
            if (house7value=='X' && house8value=='X' && house9value=='X') {
                setWinnerStatus(true);
                submit_data('Player 1');
                return
            }
            if (house1value=='X' && house4value=='X' && house7value=='X') {
                setWinnerStatus(true);
                submit_data('Player 1');
                return
            }
            if (house2value=='X' && house5value=='X' && house8value=='X') {
                setWinnerStatus(true);
                submit_data('Player 1');
                return
            }
            if (house3value=='X' && house6value=='X' && house9value=='X') {
                setWinnerStatus(true);
                submit_data('Player 1');
                return
            }
            if (house1value=='X' && house5value=='X' && house9value=='X') {
                setWinnerStatus(true);
                submit_data('Player 1');
                return
            }
            if (house3value=='X' && house5value=='X' && house7value=='X') {
                setWinnerStatus(true);
                submit_data('Player 1');
                return
            }
    
            if (house1value=='O' && house2value=='O' && house3value=='O') {
                setWinnerStatus(true);
                submit_data('Player 2');
                return
            }
            if (house4value=='O' && house5value=='O' && house6value=='O') {
                setWinnerStatus(true);
                submit_data('Player 2');
                return
            }
            if (house7value=='O' && house8value=='O' && house9value=='O') {
                setWinnerStatus(true);
                submit_data('Player 2');
                return
            }
            if (house1value=='O' && house4value=='O' && house7value=='O') {
                setWinnerStatus(true);
                submit_data('Player 2');
                return
            }
            if (house2value=='O' && house5value=='O' && house8value=='O') {
                setWinnerStatus(true);
                submit_data('Player 2');
                return
            }
            if (house3value=='O' && house6value=='O' && house9value=='O') {
                setWinnerStatus(true);
                submit_data('Player 2');
                return
            }
            if (house1value=='O' && house5value=='O' && house9value=='O') {
                setWinnerStatus(true);
                submit_data('Player 2');
                return
            }
            if (house3value=='O' && house5value=='O' && house7value=='O') {
                setWinnerStatus(true);
                submit_data('Player 2');
                return
            }
    
            if (house1value &&
                house2value &&
                house3value &&
                house4value &&
                house5value &&
                house6value &&
                house7value &&
                house8value &&
                house9value ) {
                setWinnerStatus(true)
                submit_data('Draw')
            }
        }
    }

    const submit_data = async (winner) => {
        
        let showResult = document.getElementById('show-winner');

        let data;

        if (winner=='Player 1') {
            showResult.innerHTML = 'Winner is: '+playerOne
            data = [
                {
                    'username': playerOne,
                    'status': 'WIN'
                },
                {
                    'username': playerTwo,
                    'status': 'LOSE'
                }
            ]
        } else if (winner=='Player 2') {
            showResult.innerHTML = 'Winner is: '+playerTwo
            data = [
                {
                    'username': playerOne,
                    'status': 'LOSE'
                },
                {
                    'username': playerTwo,
                    'status': 'WIN'
                }
            ]
        } else {
            showResult.innerHTML = 'Draw!'
            data = [
                {
                    'username': playerOne,
                    'status': 'DRAW'
                },
                {
                    'username': playerTwo,
                    'status': 'DRAW'
                }
            ]
        }

        try {
            const response = await fetch('http://localhost:8000/play', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

            if (response.status==200) {
                console.log('Post Was Sucssefull')
            }
        } catch (error) {
            console.error('Error is: ',error)
        }
    }




    return (
        <>
            <h1 id='show-winner' style={{textAlign:'center',color:'#FA8305'}}></h1>
            <div className='d-flex justify-content-between px-5' style={{marginTop:'4rem'}}>
                <h2>Player One: {playerOne}</h2>
                <h2>Player Two: {playerTwo}</h2>
            </div>

            <div className='d-flex justify-content-center row'>
                <div className='col-5'>
                    <div className='row mt-4'>
                        <div className='col-4'>
                            <Square turn={turn} setTurn={setTurn} setHouseValue={sethouse1value} winnerStatus={isWinnerFound} />
                        </div>
                        <div className='col-4'>
                            <Square turn={turn} setTurn={setTurn} setHouseValue={sethouse2value} winnerStatus={isWinnerFound} />
                        </div>
                        <div className='col-4'>
                            <Square turn={turn} setTurn={setTurn} setHouseValue={sethouse3value} winnerStatus={isWinnerFound} />
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-4'>
                            <Square turn={turn} setTurn={setTurn} setHouseValue={sethouse4value} winnerStatus={isWinnerFound} />
                        </div>
                        <div className='col-4'>
                            <Square turn={turn} setTurn={setTurn} setHouseValue={sethouse5value} winnerStatus={isWinnerFound} />
                        </div>
                        <div className='col-4'>
                            <Square turn={turn} setTurn={setTurn} setHouseValue={sethouse6value} winnerStatus={isWinnerFound} />
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-4'>
                            <Square turn={turn} setTurn={setTurn} setHouseValue={sethouse7value} winnerStatus={isWinnerFound} />
                        </div>
                        <div className='col-4'>
                            <Square turn={turn} setTurn={setTurn} setHouseValue={sethouse8value} winnerStatus={isWinnerFound} />
                        </div>
                        <div className='col-4'>
                            <Square turn={turn} setTurn={setTurn} setHouseValue={sethouse9value} winnerStatus={isWinnerFound} />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginTop:'100px',textAlign:'center'}}>
                <p style={{color:'#FA8305'}}>Proved By Karan Shahkolaee 2024</p>
            </div>

        </>
    );
};

export default Game;
