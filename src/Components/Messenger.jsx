
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

// const socket = io('ws://localhost:8000/ws/WebApi/'); // Replace with your WebSocket server URL

const Messenger = () => {
    // const [message, setMessage] = useState('');
    // const [messages, setMessages] = useState([]);

    // useEffect(() => {
    //     socket.on('message', (message) => {
    //         setMessages([...messages, message]);
    //     });
    // }, [messages]);

    // const sendMessage = () => {
    //     if (message.trim()) {
    //         socket.emit('message', message);
    //         setMessage('');
    //     }
    // };

    return (
        // <div className="App">
        //     <div>
        //         {messages.map((msg, index) => (
        //             <div key={index}>{msg}</div>
        //         ))}
        //     </div>
        //     <div>
        //         <input
        //             type="text"
        //             placeholder="Type your message..."
        //             value={message}
        //             onChange={(e) => setMessage(e.target.value)}
        //         />
        //         <button onClick={sendMessage}>Send</button>
        //     </div>
        // </div>
        <>
        
        </>
    );
}

export default Messenger;
