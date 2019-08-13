import React from 'react';
import {connect} from 'react-redux';

import {CounterActions} from '../store/counter/actions';

class CounterContainer extends React.Component {
  render(){
    return(
      <div>
        <button onClick={this.props.decrement}>-</button>
        <p>{this.props.count}</p>
        <button onClick={this.props.increment}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state.counterReducer;
}

function mapDispatchToProps(dispatch){
  return {
    increment: () => {dispatch(CounterActions.increment());},
    decrement: () => {dispatch(CounterActions.decrement());}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
