import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleQuickServices = () => {
    const botMessage = createChatBotMessage("Nos services rapides !", {
      widget: "quick-services",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleInternetPackages = () => {
    const botMessage = createChatBotMessage("Nos meilleurs offres internet mobile !", {
      widget: "internet-packages",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  const handleContact = () => {
    const botMessage = createChatBotMessage("Notre contact !", {
      widget: "contact",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleQuickServices,
            handleInternetPackages,
            handleContact,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
