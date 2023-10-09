import { useState } from "react";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home")
  return (
    <div className="app">
      <Navbar 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App;
