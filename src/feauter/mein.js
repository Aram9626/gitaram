import React,{Component} from 'react';
import Carousel from './carusel';
import OurFeauter from "./ourfeauters/ourfeauters";
import {Route, Switch} from "react-router";
import People from "../teams/people";
import Teams from "../teams/team";

export default class Mein extends Component{
    render() {
        return(<div>
            <Carousel/>
                <OurFeauter/>
                <Switch>
                <Route path='/teams/:man' exact component={People}/>
                <Route path='/' exact component={Teams}/>
                </Switch>
            </div>
            )
    }
}