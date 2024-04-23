import * as math from "mathjs";

const operatorsArr = ['*', '/', '+', '-','^','&']
var ansNumber = 0;
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
        ansNumber = this.handlePow(base,exp);
        return this.handlePow(base,exp);
      }
      ansNumber = math.evaluate(state);
      return math.evaluate(state);
    }
  },

  handlePow(base, exp) {
    ansNumber = base ** exp;
    return base ** exp;
  },

  handleInvers(state) {
    if (state === "") {
      return state;
    } else {
      if (state === 0) {
        return state;
    }
      ansNumber = 1/state;
      return 1/state;
    }
  },
  handleRoot(state) {
    if (state === "") {
      return state;
    } else {
      ansNumber = Math.sqrt(state);
      return Math.sqrt(state);
    }
  },

  handleLog(state) {
    if (state === "") {
      return state;
    } else {
      ansNumber = Math.log(state);
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
  handleAns(state) {
    if (state === "") {
      return ansNumber;
    } else {
      return state + ansNumber;
    }
  },


};

export default function reducer(state, action) {
  let type = action.type;
  let param = action.param;
  return actions[type](state, param);
}
