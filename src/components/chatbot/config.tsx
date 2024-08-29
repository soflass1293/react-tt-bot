import { createChatBotMessage } from "react-chatbot-kit";
import QuickServices from "./widgets/quick-services";
import InternetPackages from "./widgets/internet-packages";
import Contact from "./widgets/contact";

const config = {
  // @ts-ignore
  initialMessages: [createChatBotMessage(`Bonjour ! Tapez contact, internet ou services...`)],
  widgets: [
    {
      widgetName: "quick-services",
      widgetFunc: (props) => <QuickServices {...props} />,
    },
    {
      widgetName: "internet-packages",
      widgetFunc: (props) => <InternetPackages {...props} />,
    },
    {
      widgetName: "contact",
      widgetFunc: (props) => <Contact {...props} />,
    },
  ],
};

export default config;
