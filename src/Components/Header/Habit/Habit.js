import React from 'react';
import './Habit.css';

const Habit = (props) => {
    const {Habit,img,time} = props.habit;
   
    return(
        <div>
            <div className ='habit'>
                <img src={img}></img>
                <h3>{Habit}</h3>
                <h6>Time Require: {time} Hours</h6>

                <button onClick={() => props.handleClick(props.habit.time)} className='btn-habit'>
                    <p>Add to List</p>
                </button> 
            </div>
        </div>  
     );
};


export default Habit;