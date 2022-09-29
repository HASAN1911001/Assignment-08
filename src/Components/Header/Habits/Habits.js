import React, { useEffect, useState } from "react";
import './Habits.css';

const Habits = () => {
    const [habits, setHabits] = useState([]);

    useEffect( () => {
        fetch('Habits.json')
        .then(res=> res.json())
        .then(data=> console.log(data));
    }, [])

    return(
        <div className='Habits'>
            <div className="Habits-container">
                <h3>This is for Habits</h3>
            </div>
            <div className="Habit Summary">
                <h4>This is for summary</h4>
            </div>
        </div>   
     );
};


export default Habits;