import React from 'react';
import {Recruits} from './../api/recruits';

export default class AddRecruit extends React.Component {
  handleSubmit(e) {
    let recruitName = e.target.recruitName.value;
    e.preventDefault();

    if (recruitName.trim() != ""){
      e.target.recruitName.value = '';
      Recruits.insert({
        name: recruitName,
        note: "",
        state: 0,
        created_at: new Date().getTime()
      });
    }
  }

  render() {
      return (
        <div className="item">
          <form className="form" onSubmit={this.handleSubmit}>
          <input className="form__input" type="text" name="recruitName" placeholder="Recruit Name"></input>
          <button className="button">Add new recruit</button>
          </form>
        </div>
    );
  }
};
