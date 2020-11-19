import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Reports from '../components/reports/reports.component';
import Settings from '../components/settings/settings.component';
import Alert from '../components/alerts/alerts.component';
import Faces from '../components/faces/faces.component';
import Home from '../components/home/home.component';
import AddAlert from '../components/add-alert/add-alert.component';

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/alert">
            <Alert />
        </Route>
        <Route path="/reports">
            <Reports />
        </Route>
        <Route path="/settings">
            <Settings />
        </Route>
        <Route path="/faces">
            <Faces />
        </Route>
        <Route path="/add-alert">
            <AddAlert/>
        </Route>
    </Switch>
);

export default Routes;