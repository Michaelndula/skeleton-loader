import React from "react";
import Articles from "./components/articles";
import User from "./components/userProfile";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Skeleton Loader</h1>
      </header>
      <div className="content">
        <Articles />
        <User />
      </div>
    </div>
    
  );
}

export default App;
