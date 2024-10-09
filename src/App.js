import './App.css';
import Header from './elements/Header';
import Home from './components/Home';
import Footer from './elements/Footer';

function App() {
  // const timeDate = new Date(2024, 3, 25);
  // const title = "Book";
  // const price = 200

  const myArr=[
    {
      id: '1',
      title : 'Hindi',
      price : 250,
      creatDate : new Date(2023, 5, 2),
    },
    {
      id: '2',
      title : 'English',
      price : 350,
      creatDate : new Date(2022, 8, 25),
    },
    {
      id: '3',
      title : 'Math',
      price : 300,
      creatDate : new Date(2020, 3, 20),
    },
    {
      id: '4',
      title : 'Social Science',
      price : 250,
      creatDate : new Date(2022, 2, 28),
    },
    {
      id: '5',
      title : 'Science',
      price : 400,
      creatDate : new Date(2024, 3, 25),
    }
  ]


  return (
    <>
      <Header></Header>
      <Home
        date={myArr[0].creatDate}
        title={myArr[0].title}
        amount={myArr[0].price}
      />

      <Home
        date={myArr[1].creatDate}
        title={myArr[1].title}
        amount={myArr[1].price}
      />
      <Home
        date={myArr[2].creatDate}
        title={myArr[2].title}
        amount={myArr[2].price}
      />
      <Home
        date={myArr[3].creatDate}
        title={myArr[3].title}
        amount={myArr[3].price}
      />
      <Home
        date={myArr[4].creatDate}
        title={myArr[4].title}
        amount={myArr[4].price}
      />
      <Home
        date={myArr[5].creatDate}
        title={myArr[5].title}
        amount={myArr[5].price}
      />
        
      <Footer></Footer>
    </>
  );
}

export default App;
