import React from '../node_modules/react';
import ReactDOM from "../node_modules/react-dom";
import { Meteor } from "meteor/meteor";

Meteor.startup(function (){
    let name = 'Brian';
    let accountTitle = 'Score Keep';
let jxs = (
                <div>
                    <h1>{accountTitle}</h1>
                    <p>hello {name}, this is from main.js</p>
                    <p>hi someone</p>
                </div>
            );
    ReactDOM.render(jxs, document.getElementById('app'));
});