import React from "react";
import { render } from "react-dom";
import * as data from "./messages.json";

// Functional component
const Message = props => {
  return (
    <div className="message-container">
      <p>"{props.text}"</p>
      <div className="details-container">
        <small>
          Sent by <b>{props.sentBy}</b>
        </small>
      </div>
    </div>
  );
};

// Main App component
// renders a list of Messages using data from messages.json
const App = ({ messages }) => {
  return (
    <div>
      <h2>Message List</h2>
      {messages.map((message, i) => (
        <Message
          key={`message-${i}`}
          text={message.text}
          sentBy={message.sentBy}
        />
      ))}
    </div>
  );
};
render(<App messages={data.messages} />, document.getElementById("root"));
