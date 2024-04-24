import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import TodoApp from './components/TodoApp';

function App() {
  return (
    <Router>
      <>
        
        <Routes>
          <Route path="/" element={<TodoApp />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;