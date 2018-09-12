import { react } from '../node_modules/react';
import { reactDOM } from "../node_modules/react-dom";
import { meteor } from "meteor/meteor";

meteor.startup(function (){
    let jxs = <p>this is from main.js</p>;
    reactDOM.render(jxs, document.getElementById('app'));
});