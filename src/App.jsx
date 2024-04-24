import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <Router>
      <Navigation>
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </Navigation>
    </Router>
  );
}

export default App;