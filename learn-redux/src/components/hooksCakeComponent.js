import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { buyCake } from '../redux';
function HooksCakeComponent() {

    const numOfcakes = useSelector(state=>state.cake.noOfCake)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cakes(Hooks) : {numOfcakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}

export default HooksCakeComponent;
