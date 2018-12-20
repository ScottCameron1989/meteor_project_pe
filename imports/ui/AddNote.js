import React from 'react';
import {Recruits} from '../api/recruits';

export default class AddNote extends React.Component {
  handleSubmit(e) {
    let note = e.target.recruitNote.value;
    e.preventDefault();

    if (note){
      e.target.recruitNote.value = '';
      Recruits.update(this.props.recruit._id,{$set:{note:note}})
    }
  }

  render(){
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <input className="form__input" type="text" name="recruitNote" placeholder="Note"></input>
        <button className="button">Save</button>
        </form>
      </div>
    );
  }
}
