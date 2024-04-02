import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './component/login'
import Main from './component/main'
import List from './component/list'
import Reading from './component/reading'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/list" element={<List />} />
          <Route path="/reading" element={<Reading />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
