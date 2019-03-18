import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import HealthList from './recorder/List';
import HealthCreate from './recorder/Create';
import HealthEdit from './recorder/Edit';
import HealthDelete from './recorder/Delete';
import history from '../history';






const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />

                    <Route path="/" exact component={HealthList} />
                    <Route path="/health/new" exact component={HealthCreate} />
                    <Route path="/health/edit/:id" exact component={HealthEdit} />
                    <Route path="/health/delete/:id" exact component={HealthDelete} />
                </div>
            </Router>
        </div>
    );
}

export default App;