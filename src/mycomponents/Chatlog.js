import React from 'react'
//import Header from './Header';
import { TextBox } from './TextBox';
import moment from "moment";
import '../App.css';


/*let data =[
    {messages: 'Hi Owner' , createdAt: '2021-09-14T13:23:02.298Z', sender :'Agent', _id:1 },
    {messages: 'Hi Agent' , createdAt: '2021-09-14T13:23:02.298Z', sender :'Owner', _id:2 },
    {messages: 'Hru Owner' , createdAt: '2021-09-14T13:23:02.298Z', sender :'Agent', _id:1 },
    {messages: 'Good, wby Agent?' , createdAt: '2021-09-14T13:23:02.298Z', sender :'Owner', _id:2 },
    {messages: 'Good, thanks' , createdAt: '2021-09-14T13:23:02.298Z', sender :'Agent', _id:1 },
]
*/

function Timesince(date)
{
    var seconds= Math.floor(new Date()-date)/1000;
    var interval= seconds/31536000;
    if(interval>1){
        return Math.floor(interval)+'Years';
    }
    interval= seconds/2592000;
    if(interval>1){
        return Math.floor(interval)+'Months';
    }
     interval= seconds/86400;
    if(interval>1){
        return Math.floor(interval)+'Days';
    }
    interval= seconds/3600;
    if(interval>1){
        return Math.floor(interval)+'Hours';
    }
    interval= seconds/60;
    if(interval>1){
        return Math.floor(interval)+'Minutes';
    }
        return Math.floor(interval)+'Seconds';
}
/*
  function getDataFromServer(){
      return data;
  }
 var messages = getDataFromServer();
  */

export const Chatlog  = (props) => {
   /* for(let i=0; i<data.length;i++)
    {
        messages[i].createdAt = new Date(messages[i].createdAt)//messages[i] is a date obj followed from prev decl data
       // Timesince(messages[i].createdAt);
    } */
    var showdate=new Date();
    var displaydate=showdate.getDate()+ '-' +showdate.getMonth()+'-' +showdate.getFullYear()+' T'+showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds()+" ";
  // console.log(props, "Divyanshu")
  //var cons={propsdata[0].messages}
  var cons="";
  var consB=""
  for(var x=0;x<props.data.length;x++)
  {
      //if(props.data._id==1)
    //  {
        cons=props.data[x].messages;
    //  }
    //  else
     // {
     //     consB=props.data[x].messages;
     // }
    
  }
  var text=[]
  var conv1=[]
  var convown=[]
  var mom=[]
  //<>props.data.map((conv) => props.data.messages</>
    for(var c=0; c<props.data.length;c++)
    {

        if(props.data._id==='1')
        {
            conv1.push(props.data[c].messages)
            mom.push(props.data[c].createdAt)
        } 
        else
        {
            convown.push(props.data[c].messages)
            mom.push(props.data[c].createdAt)
        } 
        console.log(conv1)
        console.log(convown)
          
    }
         //console.log(conv1)
    return (
         //cons=props.data[0].meesages
        <>
        
        <div className="Container"> 
        <h1 className="text-center">MESSENGER</h1>
            <div className="ChatBox">
                
               { convown.map( conv =>(
               <div className="Agent">
                
                     <p className="Amsg">Agent:  {conv}</p>

                     <text>
                     {moment('2021-09-14T13:23:02.298Z').fromNow()}
                         
                         
                     </text>
                     <img className="image" src="http://localhost:3000/avatar.jpg" alt="A" />
                </div> 
               ))}
                    
                     
                
                
                
                {convown.map( conv =>(
                    
                <div className="Owner"> 

                    <img className="image" src="http://localhost:3000/avatar.jpg" alt="S"  />
                    <p className="Omsg">Owner: {conv} </p> 
                    {moment('2021-09-14T13:23:02.298Z').fromNow()}
               </div> ))}
                
                
                
                <div className="MessageBox">
                
                    <input id="txt" placeholder="Type Message..."/>
                    <button className="btn btn-sm" onClick={props.onClick}>Send</button> 
                </div>
            </div>
        </div>
        </>
        //{props.data.map((conv)=>{
        //    return <TextBox conv={conv}/>
        //})}
        //cons={props.data[0].messages}
        /*
//<p className="Amsg">Agent:  {convown}</p>
        {props.data.map((conv)=>{ return( <p className="Amsg">Agent:  {conv.messages}</p> 
                )})}
        */
        
        
        // + " " + displaytime
       // {props.data.map((props.data.createdAt)=>
         //   <Timesince data={data.createdAt}/>
       //)}
        //{props.data}
        //data is JS obj and pssing it
        //{props.data[3]._id }
        //<TextBox  msgs={props.data.messages }/>
        //{Timesince(props.data.createdAt)}
    )
}



/*export const Datetime = () => {
    var showdate=new Date();
    var displaydate=showdate.getDate()+ '/' +showdate.getMonth()+'/' +showdate.getFullYear()+'/'+showdate.getTime();
    return (
        displaydate
    )
} */
