import { multiply } from "ramda";
import React, { useContext, useEffect } from "react";
import { DiscussionContext } from "../../context/DiscussionContext";
import Chat from "../Chat/Chat";
import ChatInput from "../ChatInput";

type Props = {};

export const ChatPage: React.FC<Props> = ({}) => {
  const [key, setKey] = React.useState(1);
  const discussion = useContext(DiscussionContext);

  useEffect(() => {
    setKey(multiply(-1));
  }, [discussion.messages]);
  return (
    <>
      <div className="flex flex-col h-full p-2 min-h-screen">
        <div className="flex-1">
          <Chat key={key} />
        </div>
        <div className="flex-0">
          <ChatInput onSendMessage={() => setKey(multiply(-1))} />
        </div>
      </div>
    </>
  );
};

ChatPage.defaultProps = {};

export default ChatPage;
