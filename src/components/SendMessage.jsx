import React, { useState } from 'react';
import { db, auth } from './firebase-config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function SendMessage() {
  const [msg, setMsg] = useState('');
  const messagesRef = collection(db, 'messages');

  const sendMsg = async (e) => {
    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: msg,
      createdAt: serverTimestamp(),
      uid: uid,
      photoURL: photoURL,
    });

    setMsg('');
  };

  return (
    <div className="flex border-t-2 border-gray-300 py-4">
      <input
        className="flex-grow px-4 rounded-l-lg focus:outline-none"
        placeholder="Message..."
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
        onClick={sendMsg}
      >
        Send
      </button>
    </div>
  );
}

export default SendMessage;