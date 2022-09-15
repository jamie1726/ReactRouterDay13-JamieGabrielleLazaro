import TodoList from './features/todo/TodoList';
import './App.css';
import {BrowserRouter, Routes, Route}  from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import HelpPage from './pages/HelpPage';

function App() {
  //1. / => Homework
  //2. /about =>  about our Home
  //3. /help => help about
  //4. /404 => not found
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/help" element={<HelpPage/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
