function createStore(reducer) {
  let state;
  
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  return { 
    dispatch,
    getState
  }
}


function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    case "counter/decrement":
      return { count: state.count - 1};
      
      default:
        return state;
      }
    }
    
    
    function render() {
      let container = document.getElementById("container");
      container.textContent = store.getState().count;
    }
    
let store = createStore(counterReducer)
store.dispatch({ type: "@@INIT" })

let plusButton = document.getElementById("plus-button");
plusButton.addEventListener("click", function () {
  store.dispatch({ type: "counter/increment" });
});

let minusButton = document.getElementById("minus-button");
minusButton.addEventListener("click", function () {
  store.dispatch({ type: "counter/decrement" });
});
