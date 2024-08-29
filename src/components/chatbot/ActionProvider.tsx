import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }: any) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Bonjour ! Tapez contact, internet ou services...");

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleQuickServices = () => {
    const botMessage = createChatBotMessage("Nos services rapides !", {
      widget: "quick-services",
    });

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleInternetPackages = () => {
    const botMessage = createChatBotMessage(
      "Nos meilleurs offres internet mobile !",
      {
        widget: "internet-packages",
      }
    );

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleContact = () => {
    const botMessage = createChatBotMessage("Notre contact !", {
      widget: "contact",
    });

    setState((prev: any) => ({
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
