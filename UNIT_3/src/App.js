import './App.css';
import CardComponent from './CardComponent';
function App() {
  let objs = [
    {
      name: "ITEM:1",
      price: Number(1200),
      quan: "quan1",
      id: Number(1)
    },
    {
      name: "ITEM:2",
      price: Number(1800),
      quan: "quan2",
      id: Number(2)
    },
    {
      name: "ITEM:3",
      price: Number(2000),
      quan: "quan3",
      id: Number(3)
    },
    {
      name: "ITEM:4",
      price: Number(2500),
      quan: "quan4",
      id: Number(4)
    },
  ]

  return (
    < div className="App" >
      <h1> <h1> YOUR ORDER SUMMARY  </h1></h1>
      <CardComponent array={objs} />
    </div >
  );
}

export default App;
