import React, { useState, useEffect } from "react";

function App() {
  const [isOneOfTwo, setIsOneOfTwo] = useState(true);

  const toggleComponent = () => {
    setIsOneOfTwo(!isOneOfTwo);
  };

  return (
    <div className="App">
      <button onClick={toggleComponent}>Toggle</button>
      {isOneOfTwo ? <One /> : <Two />}
    </div>
  );
}

function One() {

  useEffect(() => {
    console.log("One is up");
    return () => {
      console.log("One is down");
    };
  }, []);

  return <p>I'm one</p>;
}

function Two() {
  
  useEffect(() => {
    console.log("Two is up");
    return () => {
      console.log("Two is down");
    };
  }, []);

  return <p>I'm two</p>;
}

export default App;
