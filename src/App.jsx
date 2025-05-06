import { useState } from "react";
import "./App.css";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`container ${isOpen ? "opened" : "closed"}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="bar top"></div>
            <div className="bar middle"></div>
            <div className="bar bottom"></div>
        </div>
    );
}

export default App;
