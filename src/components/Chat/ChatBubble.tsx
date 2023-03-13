import classNames from "classnames";
import { DateTime } from "luxon";
import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { ChatMessage } from "../../types/ChatMessage";

type Props = {
  message: ChatMessage;
};

export const ChatBubble: React.FC<Props> = ({ message }) => {
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageRef.current) {
      // messageRef.current?.scrollIntoView({ behavior: "smooth" });
      // messageRef.current?.scrollBy({
      //   top: messageRef.current.scrollHeight,
      //   behavior: "smooth",
      // });
    }
  }, [messageRef]);

  const chatClasses = classNames("chat", {
    "chat-start": message.user !== "user",
    "chat-end": message.user === "user",
  });

  const bubbleClasses = classNames("chat-bubble prose", {
    "": message.user === "system",
    "chat-bubble-primary": message.user === "assistant",
    "chat-bubble-secondary": message.user === "user",
  });

  return (
    <>
      <div className={chatClasses} ref={messageRef}>
        <div className="chat-header">
          {message.user}
          <time className="text-xs opacity-50 pl-2">
            {DateTime.fromJSDate(message.date).toRelative()}
          </time>
        </div>
        <div className={bubbleClasses}>
          <ReactMarkdown>{message.text}</ReactMarkdown>
          {/* {message.text.split("\n").map((partMessage) => (
            <p>{partMessage}</p>
          ))} */}
        </div>
      </div>
    </>
  );
};

ChatBubble.defaultProps = {};

export default ChatBubble;
