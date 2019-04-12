import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getData, deleteSmurf } from '../actions';

const updateSyle = {
    textDecoration: 'none',
    color: 'white'
}
class SmurfList extends React.Component {

    componentDidMount() {
        this.props.getData();
    }

    deleteSmurf = (id) => {
        this.props.deleteSmurf(id);
    };

    render() {
        return (
            <div>
                <h1 className='smurfH1'>Smurf Village</h1>
                {this.props.smurfs.map(smurf => {
                    return <div className='smurfHold' key={smurf.id}>
                    <h3 onClick={() => this.deleteSmurf(smurf.id)} className='dBtn'>x</h3>
                    <p className='smurfAtts'>Name: {smurf.name} </p>
                    <p className='smurfAtts'> Height: {smurf.height}</p>
                        <p className='smurfAtts'>Age: {smurf.age} smurf years old</p>
                        <Link style={updateSyle} to={`/update/${smurf.id}`}>Edit</Link>
                        </div>
                })}
            </div>
        );
    }
}

const mapStateToProps = ({ smurfs, fetchingSmurfs }) => ({
    smurfs,
    fetchingSmurfs
});

export default withRouter(
    connect(
        mapStateToProps,
        { getData, deleteSmurf}
    )(SmurfList)
);