import React, { Component } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchHealth, deleteHealth } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




class Delete extends Component {
    componentDidMount() {
        this.props.fetchHealth(this.props.match.params.id)
    }

    renderactions() {
        return (
            < React.Fragment >
                <button
                    onClick={() => this.props.deleteHealth(this.props.match.params.id)}
                    className="ui button negative" >確定刪除
                 </button>
                <Link to="/" className="ui button primary">取消</Link>
            </React.Fragment >
        );
    }

    renderContent() {
        console.log(this.props)
        if (!this.props.health) {
            return "你確定要刪除？"
        }
        return (<div>
            體重: {this.props.health.weight} KG < br />
            身高：{this.props.health.height} cm < br />
            BMI: {this.props.health.bmi}
        </div>
        )
    }

    render() {
        return (
            < Modal
                title="是否刪除以下資料？"
                content={this.renderContent()}
                actions={this.renderactions()}
                onDismiss={() => history.push("/")}
            />
        );

    };
};

const mapStateToProps = (state, ownProps) => {
    return { health: state.healths[ownProps.match.params.id] }
}



export default connect(mapStateToProps, { fetchHealth, deleteHealth })(Delete);