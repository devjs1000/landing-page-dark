
 const initialState={
    demo:0
}

const reducer=(state:typeof initialState= initialState, action:any)=>{
    switch(action.type){
        case 'DEMO':
            return {...state, demo:action.demoVal}
        break;
        default:
            return state
    }
}

export default reducer