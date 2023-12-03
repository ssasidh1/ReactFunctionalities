import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { buyIceCream } from '../redux';
const HooksIcecreamComponent = () => {
    const numOfIceCreams = useSelector(state=>state.ice.noOfIcecreams)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Icecream(Hooks) : {numOfIceCreams}</h2>
            <button onClick={()=>dispatch(buyIceCream())}>Buy Icecream</button>
        </div>
    );
}

export default HooksIcecreamComponent;
