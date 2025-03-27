import React from "react";
import "./App.css";
import NewsApp from "./components/NewsApp";
import { NewsProvider } from "./hooks/NewsContext";

const App = () => (
    <div className="App">
        <NewsProvider>
            <NewsApp />
        </NewsProvider>
    </div>
);

export default App;
