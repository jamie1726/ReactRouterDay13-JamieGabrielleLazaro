import TodoList from './features/todo/TodoList';
import './App.css';
import {BrowserRouter, Routes, Route, Outlet, Link}  from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import HelpPage from './pages/HelpPage';
import BasicLayout from './layout/BasicLayout';

function App() {
  //1. / => Homework
  //2. /about =>  about our Home
  //3. /help => help about
  //4. /404 => not found

  //api
  //prefix
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicLayout/>}>
            <Route path="/" element={<TodoList/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/help" element={<HelpPage/>}/>
            <Route path="/*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
