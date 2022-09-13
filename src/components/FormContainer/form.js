import { Component } from "react";

import './form.css'

class Form extends Component{
    state={
        nameInput:'',
        phoneInput:'',
        emailInput:''
    }

    onChangeName=event=>{
        this.setState({
            nameInput:event.target.value
        })
    }

    onChangePhone=event=>{
        this.setState({
            phoneInput:event.target.value
        })
    }

    onChangeEmail=event=>{
        this.setState({
            emailInput:event.target.value
        })
    }
    render(){
        const {nameInput,phoneInput,emailInput}=this.state
        return(
            <from className='from'>
                <div className="container">
                <h1 className="heading">Book An Appointment</h1>
                <input className="input"
                    required='required'
                    placeholder="Name"
                    type='text'
                    onChange={this.onChangeName}
                    value={nameInput}
                    id='nameInput'
                    />
                <input className="input"
                    required='required'
                    placeholder="phoneNo."
                    type='text'
                    value={phoneInput}
                    id='phoneInput'
                    onChange={this.onChangePhone}
                    />
                <input className="input"
                    required='required'
                    placeholder="Email"
                    id="emailInput"
                    type='text'
                    onChange={this.onChangeEmail}
                    value={emailInput}
                    />
                <button type="button" className="button">Submit</button>
                </div>
            </from>
        )
    }
}

export default Form