import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Space from './components/space';
import Board from './components/board';
import Sidebar from './components/sidebar';


function App() {
  const [bingo, setBingo] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [title, setTitle] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState([]);

  const randomizeAndSelect25 = (arr) => {
    const arr_clone = [...arr];
    const arr_return = [];
    let randIdx = 0;
    let splicedElem = 0;

    for (let i = 0; i < 25; i++) {
      randIdx = Math.floor(Math.random() * arr_clone.length);
      splicedElem = arr_clone.splice(randIdx, 1)[0];
      arr_return.push(splicedElem);
    }

    return arr_return;
  }

  //grabs very first db object
  useEffect(() => {
    let _25 = [];
    setSubmitted(false);
    axios.get(`http://localhost:8000/api/bingo/`)
      .then(res => {
        console.log(res);
        setData(res.data);
        return res.data[0];
      })
      .then(res => {
        setAllCards(res.spaces);
        _25 = randomizeAndSelect25(res.spaces);

        setTitle(data.title);
        setBingo(_25);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const handleCreateNewBingoCard = (e, newBingo, id, newSpace) => {
    e.preventDefault();
    console.log(e);
    console.log(newBingo);
    console.log(id);
    console.log(newSpace);
    newSpace = newSpace.replace(/\s+/g, '');

    if (newSpace) {
      console.log("appended to array");
      newBingo.push(newSpace);
    }
    newBingo = newBingo.filter(space => space !== "");


    console.log(newBingo);
    console.log({ newBingo })
    console.log("created new bingo")

    axios.put(`http://localhost:8000/api/bingo/${id}`, { spaces: newBingo })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })


    setBingo(randomizeAndSelect25(newBingo));
  }

  return (
    <div className="App">
      <h1>Welcome to bingo</h1>
      <div className='d-flex justify-content-around'>
        {/* will need to lift state from sidebar  */}
        <Board bingo={bingo}></Board>
        <Sidebar data={data} handleCreateNewBingoCard={handleCreateNewBingoCard}></Sidebar>
      </div>
    </div >
  );
}

export default App;
