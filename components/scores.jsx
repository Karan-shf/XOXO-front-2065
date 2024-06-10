import React, { useEffect, useState } from "react";
import './scores.css'

const TopScores = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
        fetch("http://localhost:8000/scores")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }, []);

    let counter = 0;

  return (
    <>
    
        <div className="text-center" style={{marginTop:'4rem'}}>
            <h1>SCORE TABLE (TOP 10)</h1>
        </div>

        <div className="px-5 mt-5">
            <div className="row">
                <div className="col-5"><h2>ROW</h2></div>
                <div className="col-5"><h2>NAME</h2></div>
                <div className="col-2"><h2>SCORE</h2></div>
            </div>
            {data.map((item) => (
                <div className="row rounded-pill users">
                    <div className="col-5"><h3>{++counter}</h3></div>
                    <div className="col-5"><h3>{item.username}</h3></div>
                    <div className="col-2 d-flex justify-content-center"><h3>{item.score}</h3></div>
                </div>
            ))}
            
        </div>

        <div style={{ marginTop: '150px',textAlign:'center' }}>
            <p style={{ color: '#FA8305' }}>Proved By Karan Shahkolaee 2024</p>
        </div>
    
    </>
    // <div>
    //   {data.map((item) => (
    //     <div>{item.username} - {item.score}</div>
    //   ))}
    // </div>
  );
};

export default TopScores;