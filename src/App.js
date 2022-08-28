import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/home/Home';
import Hotel from './pages/home/Hotel/Hotel';
import List from './pages/home/list/List';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={ <Home/>} />
          <Route path="/hotels" element={<List/>} />
          <Route path="/hotels/:id" element={<Hotel/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
