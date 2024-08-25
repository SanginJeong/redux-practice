let initialState = {
  count: 0,
}

function reducer(state=initialState,action) { // dispatch로 던져준 action을 reducer가 받아줄수있음
  console.log('action :', action);
  // if문
  if(action.type === "INCREMENT"){
    return {...state, count : state.count+action.payload.num}; // 새로운 객체를 전달하는 것 (원래 state에 count가 있는걸 그대로 새로운객체에 {count:} 넣고 바꿔서 전달)
  }

  if(action.type === "DECREMENT"){
    return {...state, count : state.count - action.payload.num};
  }

  return {...state};

  // switch문
  // switch(action.type){
  //   case "INCREMENT":
  //     return {...state, count : state.count + action.payload.num};
  //   case "DECREMENT":
  //     return {...state, count : state.count - action.payload.num} 
  //   default:
  //     return {...state}
}

export default reducer;