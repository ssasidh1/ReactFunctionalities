import React from 'react';
import { buyCake } from '../redux';
import {connect} from 'react-redux'
const CreateCakeComponent = (props) => {
    return (
        <div>
            <h2>Number of cakes : {props.noOfCake}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}

const mapStateToProps = state =>{
    return {
      noOfCake : state.noOfCake
    }
  }
  
  const mapDispatchToProps = dispatch =>{
    return{
      buyCake: ()=>dispatch(buyCake())
    }
  }


export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CreateCakeComponent);
