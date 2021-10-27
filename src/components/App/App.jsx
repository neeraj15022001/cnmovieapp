import React from "react";
import Navbar from "../Navbar/Navbar";
import Body from "../Body/Body";
function App({store}) {
  return (
    <div>
      <Navbar store={store} />
      <Body store={store} />
    </div>
  );
}

export default App;
