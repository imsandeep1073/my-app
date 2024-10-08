import './App.css';
import Header from './elements/Header';
import Home from './components/Home';
import Footer from './elements/Footer';

function App() {
  const timeDate = new Date(2024, 3, 25);
  const title = "Book";
  const price = 200

  return (
    <>
      <Header></Header>
      <Home
        date={timeDate}
        title={title}
        amount={price}
      >
      </Home>
      <Footer></Footer>
    </>
  );
}

export default App;
