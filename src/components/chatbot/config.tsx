import { createChatBotMessage } from "react-chatbot-kit";
import QuickServices from "./widgets/quick-services";
import InternetPackages from "./widgets/internet-packages";
import Contact from "./widgets/contact";

const config = {
  // @ts-ignore
  botName: "TT Bot",
  initialMessages: [
    createChatBotMessage(
      `Bonjour ! Tapez contact, internet ou services...`,
      {}
    ),
  ],
  widgets: [
    {
      widgetName: "quick-services",
      widgetFunc: () => <QuickServices />,
    },
    {
      widgetName: "internet-packages",
      widgetFunc: () => <InternetPackages />,
    },
    {
      widgetName: "contact",
      widgetFunc: () => <Contact />,
    },
  ],
};

export default config;
