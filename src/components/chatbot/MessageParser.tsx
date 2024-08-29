import React from "react";

const MessageParser = ({ children, actions }: any) => {
  const parse = (payload: string) => {
    const message = payload.toLowerCase();
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("bonjour")
    ) {
      actions.handleHello();
    } else if (message.includes("service")) {
      actions.handleQuickServices();
    } else if (
      message.includes("internet") ||
      message.includes("forfait") ||
      message.includes("net")
    ) {
      actions.handleInternetPackages();
    } else if (
      message.includes("contact") ||
      message.includes("phone") ||
      message.includes("maps")
    ) {
      actions.handleContact();
    } else {
      actions.handleUnknown();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
