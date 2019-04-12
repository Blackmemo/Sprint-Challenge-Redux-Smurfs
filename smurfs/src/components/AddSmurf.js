import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurf extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            smurf: {
                name: '',
                age: undefined,
                height: ''
            }
        }
    }

    addSmurf = e => {
        e.preventDefault();
        this.props.addSmurf(this.state.smurf)
        this.setState({
            smurf: {
                name: '',
                age: undefined,
                height: ''
            }
        });
        this.props.history.push('/');
    };

    handleChanges = e => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        });
    };

    render(){
        return(
            <div className='formCon'>
            <form className='addForm' onSubmit={this.addSmurf}>
            <h1>Add a Smurf!</h1>
            <input
                    onChange={this.handleChanges}
                    placeholder="Name"
                    value={this.state.name}
                    name="name"/>
                    <input
                    onChange={this.handleChanges}
                    placeholder="Age"
                    value={this.state.age}
                    name="age"/>
                    <input
                    onChange={this.handleChanges}
                    placeholder="Height"
                    value={this.state.height}
                    name="height"/>
                    <button className="formBtn" type="submit">Add Smurf</button>
                </form>
        </div>
        );
    }
}

export default connect(null, { addSmurf })(AddSmurf);