import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<div>Welcome to the Todo App. Navigate to the Todo App page to manage your tasks.</div>} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;