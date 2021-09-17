import logo from './logo.svg';
import './App.css';
import './mycomponents/styles.css'
//import Header from "./mycomponents/Header";
import { Chatlog } from "./mycomponents/Chatlog";
import { TextBox } from "./mycomponents/TextBox";
//import { Chatlog } from './mycomponents/Chatlog';
//import { Datetime } from "./mycomponents/Chatlog";


function App() {
  /*//function updatechatlog(){}*/
  const onClick=()=>{
    data.push('Okay',)
    console.log( " I am clicked " );
  }
    var data =[
    {messages: 'Hi Owner' , createdAt: '2021-09-14T13:23:02.298Z', sender :'Agent', _id:1 },
    {messages: 'Hi Agent' , createdAt: '2021-09-14T13:23:02.298Z', sender :'Owner', _id:2 },
    {messages: 'Hru Owner' , createdAt: '2021-09-14T13:23:02.298Z', sender :'Agent', _id:1 },
    {messages: 'Good, wby Agent?' , createdAt: '2021-09-14T13:23:02.298Z', sender :'Owner', _id:2 },
    {messages: 'Good, thanks' , createdAt: '2021-09-14T13:23:02.298Z', sender :'Agent', _id:1 },
]
 if(data.length>0)
 {
   var prevmsgs=true;
 }
 else{
   prevmsgs=false;
 }
/*function getDataFromServer(){
   return data;
 }*/

  return (
    <>
    
    <Chatlog backlogs={prevmsgs}  data={data} timeago={data.createdAt} onClick={onClick}/>
    
    </>
  );
  //<TextBox  msgs={data}/>
  //<Header msglogs={data[0]}/>
}

export default App;
