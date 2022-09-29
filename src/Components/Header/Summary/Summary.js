import React from 'react';


const Summary = (props) => {
    const {clicked} = props;
    let total = 0;
    for(const click of clicked)
        {
            total = total + click.time;  
        }
    
    let alu;
    const handle = (time) =>{
        
        alu = time;
      }
    let value = alu;
    return(
        <div>
            <div className="my-info">
                    <img className="img-Hasan" src="https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-6/293797311_586060199814995_7782406136788577697_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH12dup9Ep8Sej4q4Q9Ow7coR0y--mRvwOhHTL76ZG_A_IxLrLCMMMByZZ-4VxIn_jpq2KuiFHucsGJ9g3iK7cE&_nc_ohc=SMHeisvYXgYAX-_lzzk&_nc_zt=23&_nc_ht=scontent.fdac2-1.fna&oh=00_AT_XkpMQ3BPNAcRp3r_ry0cdFV7NLzFgBlJgr7xtn2aTzw&oe=633A8E88"></img>
                    <div>
                        <h3>MD. ZIAUL HASAN</h3>
                        <small>Location: Chittagong, Banaladesh</small>
                    </div>
                    <h3>Student Profile:</h3>
                    <div className="Student">
                        <h5>University: CUET</h5>
                        <h5>Department: BME</h5>
                        <h6>Student ID: 1911001</h6>
                    </div>
                    <div className="add-a-break">
                        <h1>Add a Break</h1>
                        <button onClick={() => handle("0.35 H") } className='btn-break'>
                            <p>0.25 H</p>
                         </button>
                         <button className='btn-break'>
                            <p>0.5 H</p>
                         </button>
                         <button className='btn-break'>
                            <p>0.75 H</p>
                         </button>
                         <button className='btn-break'>
                            <p>1 H</p>
                         </button>
                         <button className='btn-break'>
                            <p>2 H</p>
                         </button>
                    </div>

                    <div className="total-time">
                        <h1>Total Time:</h1>
                        <h3>Activity Time: {total} Hours </h3>
                        <h3>Break Time: {value}</h3>
                    </div>
                </div>
        </div>
    );
};

export default Summary;