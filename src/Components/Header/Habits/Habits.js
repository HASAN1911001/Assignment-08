import React, { useEffect, useState } from "react";
import Habit from "../Habit/Habit";
import './Habits.css';

const Habits = () => {
    const [habits, setHabits] = useState([]);

    useEffect( () => {
        fetch('Habits.json')
        .then(res=> res.json())
        .then(data=> setHabits(data));
    }, [])

    return(
        <div className='Habits'>
            <div className="Habits-container">
                <h3>Habits</h3>
                {
                habits.map(habit => <Habit></Habit>)
                }
            </div>
            <div className="Habit Summary">
                <h4>This is for summary</h4>
            </div>
        </div>   
     );
};


export default Habits;