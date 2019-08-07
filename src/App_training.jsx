// 1つのファイルにreducer, action, storeを集約させたversion

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

// Reducer部分
// ReducerはStateとActionを受け取って、Stateを返す関数
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// Counterコンポーネントを作成。カウンターの値(value)をpropsに
const Counter = ({value, onIncrement, onDecrement}) => {
  return(
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

// Store部分
// Storeは、Stateを保管する場所
const store = createStore(counter);

// 画面更新用の関数を作成
const render = () => {
  ReactDOM.render(
    // dispatch()
    // Actionを引数にとり、Reducerに現在のStateとActionを渡す。結果、ReducerがActionに応じてStateを変化させます
    <Counter
      value={store.getState()}
      onIncrement={() => {
        store.dispatch({
          type: 'INCREMENT'
        })
      }}
      onDecrement={() => {
        store.dispatch({
          type: 'DECREMENT'
        })
      }}
    />,
    document.getElementById('root')
  );
}

// subscribe()
// 関数を引数にとり、dispatchが実行される都度、引数に渡された関数を実行
store.subscribe(render);

render();
