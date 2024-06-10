import './login.css'
import { Link,useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {

    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const navigate = useNavigate();

    const startGame = () => {
        if (playerOne=='' || playerTwo=='') {
            alert("both names should be filled")
        } else {
            navigate('/play',  { state: { playerOne, playerTwo } });
        }
    }


    return (
        <>
            <div className="row d-flex justify-content-center text-center" style={{marginTop:'7rem'}}>
                <div className="col-4">
                    <h2 className="content">Fill The Form</h2>
            
                    <input className="content rounded-3" type="text" placeholder="Enter Player One" value={playerOne} onChange={(e) => setPlayerOne(e.target.value)}/>

                    <input className="content rounded-3" type="text" placeholder="Enter Player Two"  value={playerTwo} onChange={(e) => setPlayerTwo(e.target.value)}/>
                
                    <button id='game-starter' className='rounded-4 text-white  py-2 content' onClick={startGame} style={{backgroundColor:'#FA8305'}}>Start Game</button>
                </div>
            </div>

            <div style={{marginTop:'150px',textAlign:'center'}}>
                <p style={{color:'#FA8305'}}>Proved By Karan Shahkolaee 2024</p>
            </div>
        </>
    )
}

export default Login;