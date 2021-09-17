import React from 'react'
import "./styles.css";
import {Chatlog} from "./Chatlog";

export const TextBox = (props) => {
    return (
        <>
        <div className="Container"> 
            <div className="ChatBox">
                <div className="Agent"><img src="http://localhost:3000/avatar.jpg" alt="A" /></div>
                
                <p className="Amsg">Agent: {props}</p>
                    
                
                <div className="Owner"><img src="http://localhost:3000/avatar.jpg" alt="S" /></div>
                <p className="Omsg">Owner: </p>
            </div>
            
            <div className="MessageBox">
                <textarea name="Type Message.." id="msg" cols="30" rows="4"/>
                <button className="btn btn-sm">Send</button>
            </div>
        </div>
        </>

       
    )
    //{props.msgs[1].message} 
}
