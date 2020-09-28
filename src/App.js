import React from 'react';
import About from './container/about'
import './App.css';

function App() {

  let text = 'text'
    if (text === 'text'){
      text = 'klassno'
    }else {
      text = 'bad'
    }
  
  const style = {
    color: 'blue',
    fontSize: '21px',
    textTransform: 'uppercase',
    cursor: 'pointer'
  }
  
  let show = false
    if (show === true){
      show = 'Текст 1'
    }else{
      show = 'Текст 2'
    }

  const curcle = {
    backgroundColor: 'green',
    borderRadius: '30px',
    textAlign: 'center',
    fontSize: '60px',
    color: '#969696',
    width: '500px',
    height: '200px',
    margin: '0 auto'
  }
  
  const info = 'Hello, world!'

  const arr = ['Yerzhan ', 'Zhanerke ', 'Aibolat ', 'Ruslan ']
  // const items = arr.map((items, i) => <div key={i}><img src={items.img}/><h2 src={items.}></h2></div>)
  
  const handleClick = () => {
    alert('clicked');
  }

  const handleKeyUp = e => {
    console.log(e.target.value);
  }

  const obj = [{
    img: '/assets/play.png',
    title: 'HARDCORE NIGHT',
    descr: '24 часа кодинга в режиме нон-стоп в командах над крутыми системами.'
  },
  {
    img: '/assets/play.png',
    title: 'ВСТРЕЧИ С ЛУЧШИМИ СПИКЕРАМИ',
    descr: 'Постоянные практикумы от ведущих IT специалистов в непринужденной обстановке..'
  },
  {
    img: '/assets/play.png',
    title: 'ТУРЫ ПО IT-КОМПАНИЯМ',
    descr: 'Дни открытых дверей в компаниях Kolesa, Chocofamily, IBEC Systems, Automato, Qiwi.'
  },
  {
    img: '/assets/play.png',
    title: 'HARDCORE NIGHT',
    descr: '24 часа кодинга в режиме нон-стоп в командах над крутыми системами.'
  },
  {
    img: '/assets/play.png',
    title: 'RELAX CLUB',
    descr: 'Тимбилдинги для разрядки мозга по выходным ( футбольные матчи, Playstation, пикники).'
  },
  {
    img: '/assets/play.png',
    title: 'DECODE LIFE',
    descr: 'Следите за своим прогрессом и записывайте каждодневные инсайты.'
  }
]
  const items = obj.map((item, i) => <div key={i} className="infoblock" onClick={() => handleBlock(item.title)}><img src={item.img} className="image"/><h2>{item.title}</h2>
              <p>{item.descr}</p></div>)
  
  

  const handleBlock = (title) => {
    alert(`Вы кликнули на ${title}`)
  }

  return (
   <div className="mainBlock">
      {/* <p>{show}</p>
      <p style = {style}>{text}</p>
      <div style={curcle}>{info}</div>
      <div>
        {items}
        <button onClick={handleClick}>Button click me</button>
        <input onKeyUp={handleKeyUp} />
      </div> */}
      {/* {items} */}
      <About/>
    </div>
  );
}

export default App;
