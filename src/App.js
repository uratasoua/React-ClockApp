import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import './App.css';
import { AlarmPage } from './components/pages/AlarmPage';
import { ClockPage } from './components/pages/ClockPage';
import { TimerPage } from './components/pages/TimerPage';
import { ClockButton } from "./components/molecules/ClockButton";
import { AlarmButton } from "./components/molecules/AlarmButton";
import { TimerButton } from "./components/molecules/TimerButton";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Link to="/">
          <ClockButton />
        </Link>
        <br />
        <Link to="/alarmpage">
          <AlarmButton />
        </Link>
        <br />
        <Link to="/timerpage">
          <TimerButton />
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<ClockPage/>} />
        <Route path="/alarmpage" element={<AlarmPage/>} />
        <Route path="/Timerpage" element={<TimerPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
