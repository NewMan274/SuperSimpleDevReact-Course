import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/profile.jpg'
import dayjs from 'dayjs';
import './ChatMessage.css';

function ChatMessage({message, sender, time}) {
  //const message = props.message;
  //const sender = props.sender;
  //const{message, sender} = props;

/* if(sender === "robot") {
    return (
      <div>
        {message}
        {<img src="images/robot.png" alt="user" width="50" />}
      </div>  
    );  
  } */


  return (
    <div className={
        sender === "user" 
        ? "chat-message-user" 
        : "chat-message-robot"
      }>
      {sender === "robot" && (
        <img src={RobotProfileImage} alt="robot" className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}
        {
          <div className='chat-message-time'>
            {dayjs(time).format('h:mma')}
          </div>
        }
      </div>
      {sender === "user" && (
        <img src={UserProfileImage} alt="user" className="chat-message-profile" />
      )}
    </div>
  );
}

export default ChatMessage