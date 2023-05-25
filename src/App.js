import Navbar from './Navbar';
import Greeter from './Greeter';
import './App.css';
import Counter from './Counter';
import Mood from './Mood';
import Cart from './Cart';

const items = [
  {id: 1, name: 'Taco Seasoning', price: 2.25, qty: 2},
  {id: 2, name: 'Pinto Beans', price: 1.99, qty: 3},
  {id: 3, name: 'Sour Cream', price: 3.50, qty: 1},
]

function App() {
  return (
    <div>
      <h1>First React Page</h1>
      <Cart initialItems={items} />
      <Counter step={5} />
      <Counter />
      <Mood />
      <Navbar />
      <Greeter name="Karen" age="62" excitement={4} />
      <Greeter name="Tammy" excitement={2} />
    </div>
  );
}

export default App;
