import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Emailist from "./Emailist";
import Compose from "./Compose";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);

  console.log(isMessageOpen);
  return(
    <div className="App">
      <Header/>

      <div className="app__body">
        <Sidebar/>
        <Emailist/>
      </div>
      {
        isMessageOpen && <Compose/>
      }
    </div>
    
  )
}

export default App;