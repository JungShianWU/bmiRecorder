import _ from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHealth, editHealth } from '../../actions/index';
import Form from './Form';


class Edit extends Component {
    componentDidMount() {
        this.props.fetchHealth(this.props.match.params.id)
    }

    onSubmit = (formValue) => {
        this.props.editHealth(this.props.match.params.id, formValue)
    }

    render() {
        if (!this.props.health) {
            return (<div>LOADING..</div>)
        }
        return (
            <div>
                <div>
                    <h2>編輯資料：</h2><h6>* 必填</h6>
                    <Form
                        initialValues={_.pick(this.props.health, 'height', 'weight', 'bmi')}
                        onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    };
};



const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    return {
        health: state.healths[ownProps.match.params.id]


    }
}



export default connect(mapStateToProps, { fetchHealth, editHealth })(Edit);