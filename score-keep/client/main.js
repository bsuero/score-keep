import React from '../node_modules/react';
import ReactDOM from "../node_modules/react-dom";
import { Meteor } from "meteor/meteor";

Meteor.startup(function (){
    let name = 'someone';
    let jxs = <p>hello {name}, this is from main.js</p>;
    ReactDOM.render(jxs, document.getElementById('app'));
});