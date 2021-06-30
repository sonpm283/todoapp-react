import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import './css/Todo.css';
function App() {
  return (
    <div className="todoapp">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
