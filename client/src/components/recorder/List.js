import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHealths } from '../../actions';



class List extends Component {
    componentDidMount() {
        this.props.fetchHealths()
    }

    renderAdmin(health) {
        if (health.userId === this.props.currrntuserId) {
            return (
                <div className="right floated content">
                    <Link to={`/health/edit/${health.id}`} className="ui button primary">編輯</Link>
                    <Link to={`/health/delete/${health.id}`} className="ui button negative">刪除</Link>
                </div>
            )
        }

    }

    renderList() {
        return this.props.healths.map(health => {
            return (

                <div className="ui relaxed divided list" key={health.id}>
                    <div className="ui card" style={{ 'width': 'auto' }}>
                        <div className="item" >
                            {this.renderAdmin(health)}
                            <div className="content" >
                                <h3 style={{ "marginTop": "7px" }}>你的身高是{health.height}cm,你的體重是{health.weight}Kg,你的BMI是{health.bmi}</h3>
                            </div>
                        </div>
                    </div>
                </div>

            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <Link to="/health/new" className="ui button primary">
                        新增資料
                        </Link>
                </div>
            )
        }
    }


    render() {
        console.log(this.props.healths)
        return (
            <div>
                List
                {this.renderList()}
                {this.renderCreate()}
            </div>
        );
    };
};


const mapStateToProps = (state) => {
    return {
        healths: Object.values(state.healths),
        currrntuserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchHealths })(List);