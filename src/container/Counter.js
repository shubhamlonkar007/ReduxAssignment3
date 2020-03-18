import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Controller from '../components/controller/Controller';
import ControllerOutput from '../components/controllerOutput/ControllerOutput';

import './Counter.css';

//import { Row, Col } from 'react-bootstrap';

import '../components/controller/Controller.css'

import { connect } from 'react-redux';

class Counter extends Component {


    render() {
        const style = {
            listStyleType: 'none'
        }

        /* const listItems = this.props.storedVal.map((index,number) =>
            
            <li key={number}>{number}</li>  
        ); */

        let listItems = (
            <ul style={style}>
                {this.props.storedVal.map((value, index) => {
                    return <li key={index} onClick={() => this.props.deleteValue(index)}>{value}</li>
                })}
            </ul>
        );



        return (
            <div className="fluid">
                <ControllerOutput output={this.props.newCounter} />

                <Controller text={"Increment 1"} click={this.props.incChangedHandler} />

                <Controller text={"Decrement 1"} click={this.props.decChangedHandler} />

                <Controller text={"Increment 5"} click={this.props.incFiveHandler} />

                <Controller text={"Increment 5"} click={this.props.decFiveHandler} />

                <hr className="solid"></hr>
                <Controller text={"Store"} click={() => { this.props.storeValue(this.props.newCounter) }} />
                {listItems}

            </div>);
    }
}



const mapStateToProps = state => {
    return {
        newCounter: state.counter,
        storedVal: state.result
    }
}


const mapDispatchToProps = (dispatch, props) => {
    //console.log("props===>",props.newCounter);
    return {
        incChangedHandler: () => dispatch({ type: 'IncrementOne' }),
        decChangedHandler: () => dispatch({ type: 'DecrementOne' }),
        incFiveHandler: () => dispatch({ type: 'IncrementFive', value: 5 }),
        decFiveHandler: () => dispatch({ type: 'DecrementFive', value: 5 }),
        storeValue: (val) => dispatch({ type: 'storeVal', value: val }),
        deleteValue: (index) => dispatch({type:'deleteVal',value:index})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);