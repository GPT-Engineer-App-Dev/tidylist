import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/todo" element={<TodoApp />} />
      </Routes>
    </Router>
  );
}

export default App;
