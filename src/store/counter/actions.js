export const CounterActionTypes = {
  INCREMENT: Symbol('INCREMENT'),
  DECREMENT: Symbol('DECREMENT')
};

export const CounterActions = {
  increment,
  decrement
};

function increment() {
  return{
    type: CounterActionTypes.INCREMENT
  };
}

function decrement() {
  return{
    type: CounterActionTypes.DECREMENT
  }
}
