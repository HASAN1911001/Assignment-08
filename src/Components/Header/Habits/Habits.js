import React, { useEffect, useState } from "react";
import Habit from "../Habit/Habit";
import Summary from "../Summary/Summary";
import './Habits.css';

const Habits = () => {
    const [habits, setHabits] = useState([]);
    const [time, timeSet] = useState([]);

    useEffect( () => {
        fetch('Habits.json')
        .then(res=> res.json())
        .then(data=> setHabits(data));
    }, [])

    const handleClick = (habits) =>{
        timeSet(habits);
    }

    return(
        <div className='Habits'>
            <div className="Habits-container">
                {
                habits.map(habit => <Habit 
                    key={habit.id}
                    habit={habit}
                    handleClick={handleClick}
                ></Habit>)
                }
            </div>
            <div className="habit-summary">
                <Summary
                    time={time}
                ></Summary>
            </div>
        </div>   
     );
};


export default Habits;