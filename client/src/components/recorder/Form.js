import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';



class Form extends Component {

    renderInput = ({ input, label, meta }) => {
        console.log(this.props)
        const className = ` ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    }




    renderError({ error, touched, warning }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        } else if (touched && warning) {
            return (
                <div className="ui error message">
                    <div className="header">{warning}</div>
                </div>
            );
        }

    }



    onSubmit = (createformValue) => {
        console.log(this.props)
        this.props.onSubmit(createformValue)

    }



    render() {

        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name='height' component={this.renderInput} label="*身高(cm)"></Field>
                    <Field name='weight' component={this.renderInput} label="*體重(kg)"></Field>
                    <Field name='bmi' component={this.renderInput} label="BMI"></Field>
                    <br />
                    < button className="ui button primary">存檔</button>
                </form >

                < Link to="/" className="ui button danger">返回</Link>

            </div>
        );
    };
}


const validate = formValues => {
    const errors = {};

    if (!formValues.height) {
        errors.height = '必填！';
    } else if (isNaN(Number(formValues.height))) {
        errors.height = '輸入數字'
    } else if (formValues.height < 30) {
        errors.height = '輸入正確數字';
    } else if (formValues.height > 231) {
        errors.height = '輸入正確數字';
    }

    if (!formValues.weight) {
        errors.weight = '必填！';
    } else if (isNaN(Number(formValues.weight))) {
        errors.weight = '輸入數字'
    } else if (formValues.weight < 10) {
        errors.weight = '輸入正確數字';
    };

    return errors;
};

const warn = formValues => {
    const warnings = {}
    const height = formValues.height / 100
    const bmi = (Math.floor(formValues.weight / (height * height) * 100) / 100)
    if (bmi > 23.9) {
        warnings.weight = `你的BMI值是${bmi}，屬於肥胖。`
    }
    if (bmi < 18.5) {
        warnings.weight = `你的BMI值是${bmi}，屬於體重過輕`
    } else {
        warnings.weight = `幫你算好BMI值了  ${bmi}`
    }

    if (!formValues.bmi && formValues.weight && formValues.height) {
        warnings.bmi = `不知道的話,請輸入你的BMI 『 ${bmi}。』　`
    }


    return warnings
}

export default reduxForm({
    form: 'Form',
    validate,
    warn
})(Form);




