import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      setAlertObj("Dark Mode Enabled", "success");
      document.title = "Text-Utils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlertObj("Light Mode Enabled", "success");
      document.title = "Text-Utils - Light Mode";
    }
  };

  const setAlertObj = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Navbar mode={mode} title="TextUtils" toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<TextForm mode={mode} showAlert={setAlertObj} />}
          ></Route>
          <Route path="/about" element={<About mode={mode} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
