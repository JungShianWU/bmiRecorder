import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { createHealth } from '../../actions';


class Create extends Component {



    onSubmit = (createformValue) => {
        console.log(this.props)
        this.props.createHealth(createformValue)

    }


    render() {
        return (
            <div>
                <div>
                    <h2>新增資料：</h2><h6>* 必填</h6>
                    <Form onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    }
};


export default connect(null, { createHealth }
)(Create);