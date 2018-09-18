import React from '../node_modules/react';
import ReactDOM from "../node_modules/react-dom";
import { Meteor } from "meteor/meteor";
import {Tracker} from 'meteor/tracker';
import { Players } from '../imports/api/players';


Tracker.autorun(function(){
    console.log('Players list',Players.find().fetch());
});

const players = [{
    _id: '1',
    name: 'Romain',
    score: 50
}, {
    _id: '2',
    name: 'yiping',
    score: 90
}, {
    _id: '3',
    name: 'Jason',
    score: 65
}, {
    _id: '4',
    name: 'Josh',
    score: 20
}];

const renderPlayers = function(players) {
    return players.map(function(players) {
        return <p key={players._id}>{players.name} has {players.score} point(s)</p>;
    });
}

Meteor.startup(function (){
    let name = 'Brian';
    let accountTitle = 'Score Keep';
let jxs = (
                <div>
                    <h1>{accountTitle}</h1>
                    <p>hello {name}, this is from main.js</p>
                    <p>hi someone</p>

                    {renderPlayers(players)}
                </div>
            );
    ReactDOM.render(jxs, document.getElementById('app'));
});