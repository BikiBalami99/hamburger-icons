import Accessible from "./accessible/accessible";
import "./App.css";
import Book from "./book/Book";

function App() {
    return (
        <div>
            <div>
                <Book />
            </div>
            <div style={{ position: "relative" }}>
                <Accessible />
            </div>
        </div>
    );
}

export default App;
