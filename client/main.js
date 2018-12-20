import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import App from '../imports/ui/App';
import {Recruits} from '../imports/api/recruits';

Meteor.startup(()=>{
  Tracker.autorun(()=>{
    let recruits = Recruits.find({},{sort:{created_at:-1}}).fetch();
    let title = "Presence Keeper";
    ReactDOM.render(<App title={title} recruits={recruits}/>, document.getElementById('app'));
  });
});
