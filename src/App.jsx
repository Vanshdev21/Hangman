import "./App.css";
import FormInputContainer from "./components/FormInput/FormInputContainer";
import PlayGame from "./pages/PlayGame";
import StartGame from "./pages/StartGame";
import { Routes, Route } from "react-router";
function App() {
  return (
    // <div>
    //   <FormInputContainer></FormInputContainer>
    // </div>
    <Routes>
      <Route path="/start" element={<StartGame />} />
      <Route path="/play" element={<PlayGame />} />
      <Route path="/" element={<FormInputContainer />} />
    </Routes>
  );
}

export default App;
