import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'c3c6057f-be07-4ee3-9f76-6db8a6605a55'
        , props.user.username,
         props.user.secret
    );
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
     
    </div>
  );
};

export default ChatsPage;