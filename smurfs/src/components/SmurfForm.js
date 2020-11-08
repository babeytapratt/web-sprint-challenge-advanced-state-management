import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'

import { getSmurfs, postSmurfs } from '../actions/smurfActions'



const SmurfForm = (props) => {
    useEffect(() => {
        props.getSmurfs();
    }, [])

    return (
        <div classname="smurf form">
            <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Build your village of Smurfs</h1>
            {props.isLoading && (
                <Loader
                    type="Puff"
                    color="blue"
                    height={100}
                    width={100}
                />
            )}
                <div>
                    <label className="smurf name"{...props.getSmurfs.smurfName}></label>
                    <label className="smurf age"{...props.getSmurfs.smurfAge}></label>
                    <label className="smurf height"{...props.getSmurfs.smurfHeight}></label>
                </div>
                <div className="input form">
                    <label className='label'>Smurf Name</label>
                        <field className='input'
                        name="smurfName"
                        component="input"
                        type="text"
                        placeholder="Enter smurf name"
                        />
                </div>

                <div className="input form">
                    <label className='label'>Smurf age</label>
                        <field className='input'
                        name="smurfAge"
                        component="input"
                        type="text"
                        placeholder="Enter smurf age"
                        />
                </div>

                <div className="input form">
                    <label className='label'>Smurf Height</label>
                        <field className='input'
                        name="smurfHeight"
                        component="input"
                        type="text"
                        placeholder="Enter smurf height"
                        />
                </div>
                    <button onClick={props.postSmurfs}>Create a New Smurf For Your Village</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurf: state.smurf,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect (
    mapStateToProps, { getSmurfs, postSmurfs })(SmurfForm)
