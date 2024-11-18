import './App.css';
import React from 'react';
import Page from './components/Page';
import NewExpence from './components/Expenses/NewExpence';
import MyCard from './components/MyCard/MyCard';

function App() {
  const myArr = [
    {
      id: '1',
      title: 'Hindi',
      price: 250,
      creatDate: new Date(2022, 8, 25),
    },
    {
      id: '2',
      title: 'English',
      price: 350,
      creatDate: new Date(2022, 8, 25),
    },
    {
      id: '3',
      title: 'Math',
      price: 300,
      creatDate: new Date(2020, 3, 20),
    },
    {
      id: '4',
      title: 'Social Science',
      price: 250,
      creatDate: new Date(2022, 2, 28),
    },
    {
      id: '5',
      title: 'Science',
      price: 400,
      creatDate: new Date(2024, 3, 25),
    }
  ];

  let imgUrl = "https://img.freepik.com/premium-photo/squirrel-sitting-tree-branch_1048944-30371835.jpg?t=st=1731893906~exp=1731894506~hmac=9bacda29afbbade6323d4f2e4536cf99f6a0360394b831d6dc0129839bc19cc7"

  return (
    // <>
    //   <NewExpence />
    //   <Page
    //     date={myArr[0].creatDate}
    //     title={myArr[0].title}
    //     amount={myArr[0].price}
    //   />
    //   <Page
    //     date={myArr[1].creatDate}
    //     title={myArr[1].title}
    //     amount={myArr[1].price}
    //   />
    //   <Page
    //     date={myArr[2].creatDate}
    //     title={myArr[2].title}
    //     amount={myArr[2].price}
    //   />
    //   <Page
    //     date={myArr[3].creatDate}
    //     title={myArr[3].title}
    //     amount={myArr[3].price}
    //   />
    //   <Page
    //     date={myArr[4].creatDate}
    //     title={myArr[4].title}
    //     amount={myArr[4].price}
    //   />

    // </>

    <div>
      <MyCard userName="Sandeep" postof="not mention" imgUrl={imgUrl} />
      <MyCard />
      <MyCard />
    </div>
  );
}

export default App;
