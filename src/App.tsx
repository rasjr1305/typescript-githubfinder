import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <h1 className="h1">GitHub Finder</h1>
        <Outlet />
      </div>
    </>
  );
}

export default App;
