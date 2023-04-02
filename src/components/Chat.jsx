import React, { Component } from "react";
import { db, auth } from "./firebase-config";
import SendMessage from "./SendMessage";
import {
  collection,
  query,
  limit,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      userID: auth.currentUser.userID,
    };
  }

  componentDidMount() {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const data = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      this.setState({ messages });
    });

    this.unsubscribe = data;
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { messages } = this.state;
    const { uid, photoURL } = auth.currentUser;

    return (
      <div className="flex flex-col h-screen">
        <div className="flex items-center justify-between py-4 px-6 bg-gray-900 text-white">
          <h1 className="text-xl font-bold">Chat App</h1>
        </div>
        <div className="flex-grow p-6 overflow-y-scroll custom-scroll">
          {messages &&
            messages.map((message) => {
              const alignClass =
              uid === message.uid ? "self-end" : "self-start";
              const containerClass =
              uid === message.uid ? "ml-auto" : "mr-auto";
              return (
                <div
                  key={message.id}
                  className={`flex flex-col mb-4 ${alignClass}`}
                >
                  <div
                    className={`bg-gray-200 py-2 px-4 flex rounded-lg max-w-lg ${containerClass}`}
                  >
                    <img src={message.photoURL} className="message-img" />
                    <p className="text-gray-900">{message.text}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <SendMessage />
      </div>
    );
  }
}

export default Chat;
