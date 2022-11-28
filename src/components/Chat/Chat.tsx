import { useState } from "react";
import useChats from "hooks/useChats";
import { User } from "service/firebase";

interface ChatProps {
  user: User;
}

function Chat({ user }: ChatProps) {
  const [messageBody, setMessageBody] = useState("");
  const {
    sendMessage,
    createChat,
    myActiveChats,
    sortedMessages,
    currentChat,
    chatLists,
  } = useChats(user);

  return (
    <div>
      <button onClick={createChat}>채팅방 만들기</button>
      <div className="messages-container">
        {sortedMessages.map((message, index) => (
          <div key={index}>
            <p>
              {message.userName} : {message.content}
            </p>
          </div>
        ))}
      </div>
      <div className="message-input">
        <textarea
          value={messageBody}
          onChange={(event) => {
            setMessageBody(event.target.value);
          }}
        />
        <button
          onClick={() => {
            messageBody
              ? sendMessage(currentChat, messageBody)
              : alert("내용을 입력하세요...ㅠㅠ 제발요...");
            setMessageBody("");
          }}
        >
          보내기
        </button>
      </div>
    </div>
  );
}

export default Chat;
