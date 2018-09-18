import { Meteor } from "meteor/meteor";
import { Players } from '../imports/api/players';

Meteor.startup(function(){
    Players.insert({
        name: 'Romain',
        score: 50
    });
    console.log(Players.find().fetch());
});