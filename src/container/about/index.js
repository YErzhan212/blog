import React from 'react';
import {useState} from 'react';
import Header from '../../component/header'

function About(){

   // const [obj, setObj] = useState({
   //    name : ''
   // });

   // const handleClick = () => {
   //    setObj({
   //       name : 'Yerzhan'
   //    })
   // }

  

   const [names, setNames] = useState(['Коля','Вася','Петя']);

   const nameItems = names.map((item, i) => <li key={i}>{item}</li>)
   
   const handleAddItem = () => {
      setNames([...names, `ntr`]);
   }
   
   return(
      <div>
         <button onClick={handleAddItem}>Add Item</button>
         <ul>
            {nameItems}
         </ul>
      </div>
   )
}

export default About