import { ICECREAM } from "./iceCreamsTypes"


const initialState = {
    noOfIcecreams : 12
}

 const iceCreamReducer = (state= initialState,action) =>{
    switch(action.type){
        case ICECREAM: return{
            ...state,
            noOfIcecreams : state.noOfIcecreams -1
        }
        default: return state
    }
}

export default iceCreamReducer;