import * as math from "mathjs";

const operatorsArr = ['*', '/', '+', '-','^']
const actions = {
  handleClear() {
    console.clear();
    return "";
  },

  addtoInputNum(state, param) {
    if ((state[state.length - 1] === '-' && param === '-') || (operatorsArr.includes(state[state.length - 1]) && operatorsArr.includes(param))) {
      return state;
    } else {
      console.log(state+"stateinputNum");
      console.log(param+"paramInputNum");
      return state + param;
    }
  },

  addtoInputOpr(state, param) {
    if (state === "" || (operatorsArr.includes(state[state.length - 1]) && operatorsArr.includes(param))) {
      return state;
    } else {
      return state + param;
    }
  },

  handleEqual(state) {
    const indexPow = state.indexOf("^");
    if (state === "" || operatorsArr.includes(state[state.length - 1])) {
      return state;
    } else {
      if(indexPow !== -1){
        const base = state.substring(0, indexPow);
        const exp = state.substring(indexPow + 1);
        return this.handlePow(base,exp)
      }
      return math.evaluate(state);
    }
  },

  handlePow(base, exp) {
    return base ** exp;
  },

  handleInvers(state) {
    if (state === "") {
      return state;
    } else {
      if (state === 0) {
        return state;
    }
      return 1/state;
    }
  },
  handleRoot(state) {
    if (state === "") {
      return state;
    } else {
      return Math.sqrt(state);
    }
  },

  handleLog(state) {
    if (state === "") {
      return state;
    } else {
      return Math.log(state);
    }
  },

  handleBack(state) {
    if (state === "") {
      return state;
    } else {
      state = state.substring(0, state.length - 1);
      return(state);
    }
  },

  handleCube(state) {
    if (state === "") {
      return state;
    } else {
      return Math.pow(state, 3);
    }
  },


};

export default function reducer(state, action) {
  let type = action.type;
  let param = action.param;
  return actions[type](state, param);
}
