import React from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions';

class UpdateSmurf extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                name: '',
                age: undefined,
                height: ''
        }
    }

    componentDidMount() {
        const {smurfs, match} = this.props
        const smurf = smurfs.find(smurf => smurf.id === Number(match.params.id))
        this.setState(smurf)
    }

    updateSmurf = e => {
        e.preventDefault();
        this.props.updateSmurf(this.state)
        this.props.history.push('/');
    };

    handleChanges = e => {
        this.setState({
             [e.target.name]: e.target.value })
}

    render(){
        return(
            <div className='formCon'>
            <form className='addForm' onSubmit={this.updateSmurf}>
            <h1>Update a Smurf!</h1>
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
                    <button className="formBtn" type="submit">Update Smurf</button>
                </form>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { updateSmurf })(UpdateSmurf);