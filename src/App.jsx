import './App.css'
import { Link } from 'react-router-dom';

export default function MainPage() {

    return (

        <div className="text-center">
            
            <div style={{ marginTop: '100px' }}>
                <div>
                    <Link className="py-2 px-5 rounded-pill" to={'/login'}>Start</Link>
                </div>
                <div className="mt-5">
                    <Link className="py-2 px-5 rounded-pill" to={'/scores'}>Scores</Link>
                </div>
            </div>
            <div style={{ marginTop: '200px' }}>
                <p style={{ color: '#FA8305' }}>Proved By Karan Shahkolaee 2024</p>
            </div>
        </div>
    )
}