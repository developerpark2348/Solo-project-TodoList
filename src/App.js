/* eslint-disable */

import React, { useState } from 'react';
import './App.css';

function App() {

  const [할일, 할일변경] = useState(['운동', '복습', 'typeScript']);
  const [입력값, 입력값변경] = useState('');
  
  return (
    <div className="TemplateBlock">
      <div className="HeadBlock">
        <h1>2021년 1월 11일</h1>
        <div className="day">월요일</div>
        <div className="tasks-left">할 일 {할일.length}개 남음</div>
      </div>

      <div className="ListBlock">
      { // i는 반복문이 돌 때마다 0,1,2가 되는 변수 (변수의 가장 끝 값)
        할일.map((일, i)=>{
          return (
          <div className="list" key={i}>
            <h3> { 일 } <button className="DeleteBtn" onClick={()=>{
              var arrayCopy = [...할일]
              arrayCopy.splice(일, 1)
              할일변경 (arrayCopy)
            }}>삭제</button> </h3>
            <hr/>
          </div>
          )
        })
      }
      </div>

      <div className="InsertBlock">
        <input onChange={ (e)=>{ 입력값변경(e.target.value) } } className="InputBlock" id="input_text"/>
        <button onClick={ ()=>{
          var arrayCopy = [...할일]
          arrayCopy.unshift(입력값);
          if(입력값 == '')
          {
            alert('값을 입력해주세요!')
          } else {
          할일변경( arrayCopy );
          clear();
          }
        } } className="InputBtn">추가하기</button>
      </div>

    </div>
  );
}

function clear(){
  document.getElementById("input_text").value='';
}

export default App;

