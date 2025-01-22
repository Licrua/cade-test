import React, { useState } from "react";
import BoxScene from "./components/BoxScene";
import BoxForm from "./components/BoxForm";

const App: React.FC = () => {
  const [vertices, setVertices] = useState<number[]>([]);

  return (
    <div style={{ display: "flex" }}>
      <BoxForm onCalculate={setVertices} />
      <BoxScene vertices={vertices} />
    </div>
  );
};

export default App;
