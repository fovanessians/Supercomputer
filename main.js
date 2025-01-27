class CalcApp extends React.Component {
  componentDidMount() {
    console.log('Component has mounted');
    }
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      input: '',
      value: 0,
      log: null,
      operator: null,
      term: null,
      termFinal: null
      };
    this.numZero = this.numZero.bind(this);
    this.calculation = this.calculation.bind(this);
    this.numSeven = this.numSeven.bind(this);
    this.numEight = this.numEight.bind(this);
    this.numNine = this.numNine.bind(this);
    this.numFour = this.numFour.bind(this);
    this.numFive = this.numFive.bind(this);
    this.numSix = this.numSix.bind(this);
    this.numOne = this.numOne.bind(this);
    this.numTwo = this.numTwo.bind(this);
    this.numThree = this.numThree.bind(this);
    this.numReset = this.numReset.bind(this);
    this.numMultiply = this.numMultiply.bind(this);
    this.numDivide = this.numDivide.bind(this);
    this.numAdd = this.numAdd.bind(this);
    this.numDecimal = this.numDecimal.bind(this);
    this.numEquals = this.numEquals.bind(this);
    this.numSubtract = this.numSubtract.bind(this);
        }

  numZero() {
    this.setState(prevState => ({
      num: 0,
      input: prevState.input + '0',
      log: console.log('Previous State:', prevState) 
      })
    );
   
   }
  
  numDecimal() {
    this.setState(prevState => ({
      //no num display
      input: prevState.input + '.',
      log: console.log('Previous State:', prevState)
      }));
  }
    
  numSeven() {
    this.setState(prevState => ({
      num: 7,
      input: prevState.input + '7',
      log: console.log('Previous State:', prevState) 
      }));
  }
      
    numEight() {
    this.setState(prevState => ({
      num: 8,
      input: prevState.input + '8',
      log: console.log('Previous State:', prevState) 
      }));
  }
    numNine() {
    this.setState(prevState => ({
      num: 9,
      input: prevState.input + '9',
      log: console.log('Previous State:', prevState) 
      }));
  }
    numFour() {
    this.setState(prevState => ({
      num: 4,
      input: prevState.input + '4',
      log: console.log('Previous State:', prevState)
      }));
  }
    numFive() {
    this.setState(prevState => ({
      num: 5,
      input: prevState.input + '5',
      log: console.log('Previous State:', prevState)
      }));
  }
    numSix() {
    this.setState(prevState => ({
      num: 6,
      input: prevState.input + '6',
      log: console.log('Previous State:', prevState)
      }));
  }
    numOne() {
    this.setState(prevState => ({
      num: 1,
      input: prevState.input + '1',
      log: console.log('Previous State:', prevState)
      }));
  }
    numTwo() {
    this.setState(prevState => ({
      num: 2,
      input: prevState.input + '2',
      log: console.log('Previous State:', prevState)
      }));
  }
    numThree() {
    this.setState(prevState => ({
      num: 3,
      input: prevState.input + '3',
      log: console.log('Previous State:', prevState)
      }));
  }
    numReset() {
      this.setState(state => ({
        input: '0',
        num: 0,
        operator: null
      }));
  }
  
    numMultiply() {
       this.setState(prevState => ({
      //no num
      input: '',
      operator: '*',
      log: console.log('Previous State:', prevState),
      term: parseFloat(prevState.input)
      }));
        }
  
    numDivide() {
       this.setState(prevState => ({
      //no num
      input: '',
      operator: '/',
      log: console.log('Previous State:', prevState),
      term: parseFloat(prevState.input)
      }));
  }
    numAdd() {
         this.setState(prevState => ({
      //no num
      input: '',
      operator: '+',
      log: console.log('Previous State:', prevState),
      term: parseFloat(prevState.input)
      }));
   }
  
    numSubtract() {
         this.setState(prevState => ({
      //no num
      input: '',
      operator: '-',
      log: console.log('Previous State:', prevState),
      term: parseFloat(prevState.input)    
      }));
  }
    
    numEquals() {
       this.setState(prevState => ({
        input: '',
        operator: '=',
        log: console.log('Previous State:', prevState),
        termFinal: parseFloat(prevState.input)   
        }));
    }
                 
          
 
    
    /*arrCalc(state) {
      let numIndex = this.state.num;
      let arr = [0];        
      let indexArr = arr.push(numIndex);          
      // -- Map --
      let calcArray = [];
      let mappedCalcArray = calcArray.map((numIndex,                  [index], [array]) => numIndex);
      console.log('mapped: ' + mappedCalcArray);
      return console.log('this State num: ' + this.state.num)
      // -- Map --
    };*/
     
    
    calculation() {
      this.setState( {
        //input: this.state.input,
      });
    
    () => {
        //statements
      };   
  }
  
  
  componentDidUpdate(prevState, state) {
    let test = 5;
    console.log(`test is ${test}`);
    console.log('from component ' + this.state.input);
    console.log('component did update')
    };
    
    /*console.log('state has changed.');
    //Array.from() method converts objects/strings -> arrays
    let test = 5;
    console.log(`test is ${test}`);
    console.log('from component prev input ' + prevState.input);
    console.log('from component prev num ' + prevState.num);
    console.log('from component ' + this.state.input);*/  
  
       
  loadComponent() {
     {switch(this.state.operator) {
          case '+':
            return this.state.term + this.state.input;
            break;
          case '-':
            return this.state.term + this.state.input;
            break;
          case '*':
            return this.state.term * this.state.input;
            break;
           case '/':
            return this.state.term / this.state.input;
            break;
          default:
            return this.state.input;
            break;
          }
         }
        
  }
  
  render() {
         console.log('render called')
         console.log('type of '+ typeof(this.state.input));
         console.log('type of '+ typeof(this.state.term));
          
    return (
            <div>
              <h2>{this.state.operator}</h2>
              
       
        <input value={this.loadComponent()} id='display' onChange={this.calculation} /> 
        
        
       
        
                            
              <table><tbody><tr><td>
             {/* <button variant="secondary" id="clear" size="lg">AC</button>
               */}
                </td></tr><tr><td>
              <button variant="secondary" id="zero" size="lg" onClick={this.numZero}>0</button>
                {/*<button variant="secondary" id="decimal" size="lg">.</button>     
              <button variant="secondary" id="equals" size="lg">=</button> 
              <button variant="secondary" id="subtract" size="lg">-</button>*/}
                  </td></tr><tr><td>
              <button variant="secondary" id="seven" size="sm" onClick={this.numSeven}>7</button>           
              <button variant="secondary" id="eight" size="sm" onClick={this.numEight}>8</button>
              <button variant="secondary" id="nine" size="sm" onClick={this.numNine}>9</button>
                  </td></tr><tr><td>
              <button variant="secondary" id="four" size="sm" onClick={this.numFour}>4</button>           
              <button variant="secondary" id="five" size="sm" onClick={this.numFive}>5</button>
              <button variant="secondary" id="six"size="sm" onClick={this.numSix}>6</button>
                  </td></tr><tr><td>
              <button variant="secondary" id="one" size="sm" onClick={this.numOne}>1</button>
              <button variant="secondary" id="two" size="sm" onClick={this.numTwo}>2</button>
              <button variant="secondary" id="three" size="sm" onClick={this.numThree}>3</button>
                  </td></tr><tr><td>
              <button className="custom-btn" variant="secondary" id="clear" size="sm" onClick={this.numReset}>C</button></td><td>
              <button className="custom-btn" variant="secondary" id="clear" size="sm" onClick={this.numEquals}>=</button></td></tr></tbody></table>
                <table><tbody><tr><td>
             <button className="custom-btn-op" variant="secondary" id="decimal" size="sm" onClick={this.numDecimal}>.</button>
                  </td><td>
                  <button className="custom-btn-op" variant="secondary" id="multiply" size="lg" onClick={this.numMultiply}>x</button></td><td>
              <button className="custom-btn-op" variant="secondary" onClick={this.calculation} id="divide" size="lg" onClick={this.numDivide}>/</button></td><td>
              <button className="custom-btn-op" variant="secondary" id="add" size="lg" onClick={this.numAdd}>+</button></td>
                <td><button className="custom-btn-op" variant="secondary" id="subtract" size="lg" onClick={this.numSubtract}>-</button></td>
              </tr></tbody></table>            
              
              {console.log(this.state.num)}
              {console.log(this.state.input)}
                                       
            </div>
          );
  }
};

ReactDOM.render(
  <CalcApp />,
  document.getElementById('app')
);



//example
/*
class Hello extends React.Component {
  render() {
    return <div>Class Component  {this.props.what}</div>;
  }
}
function HelloStateless(props) {
  return <h1>Stateless Component, {props.what}</h1>;
}

let component =
ReactDOM.render(
  <Hello what="JSX" />,
  document.getElementById('app')
);

console.log(component);
*/

/*
Using useState and setState Callback: In functional components, using the useState hook to manage state. When updating the state, passing a function to setState that receives the previous state as an argument. This ensures that the state update is based on the latest state value.
import React, { useState } from "https://esm.sh/react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

Using usePrevious Hook: access the previous state within the render method for some logic (like comparing the current state with the previous state), the following is a custom hook called usePrevious.
import { useState, useEffect } from "https://esm.sh/react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function MyComponent() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  useEffect(() => {
    if (prevCount !== undefined && count !== prevCount) {
      console.log(`Count changed from ${prevCount} to ${count}`);
    }
  }, [count, prevCount]);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
*/
