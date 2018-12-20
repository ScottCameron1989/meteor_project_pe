import React from 'react';
import {Recruits} from '../api/recruits';
import AddNote from './AddNote'

export default class Recruit extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showOptions: false,
      editText:"Edit"};
  }

  renderDeleteNote(){
    if (this.props.recruit.note != "")
    {
      return (
        <button className="button__delete-note"
            onClick={()=>Recruits.update(this.props.recruit._id,{$set:{note:""}})}> X</button>
          );
    }
  }

  renderNote(){
    return (
      <div>
        <p> Note</p>
        <div className="item">
          <div className="recruit">
            <p> {this.props.recruit.note} </p>
            {this.renderDeleteNote()}
          </div>
        </div>
      </div>
    );
  }
  renderOptions(){
    if (this.state.showOptions){
      return (
        <div className="recruit__note--add">
          <button className="button  button--round__blue"
              onClick={()=>Recruits.update(this.props.recruit._id,{$set:{state:2}})}>Task</button>
          <button className="button  button--round__red"
              onClick={()=>Recruits.update(this.props.recruit._id,{$set:{state:3}})}>Sick</button>
          <button className="button  button--round__yellow"
              onClick={()=>Recruits.update(this.props.recruit._id,{$set:{state:4}})}>Leave</button>
          <button className="button  button--round__white"
              onClick={()=>Recruits.update(this.props.recruit._id,{$set:{state:0}})}>Clear</button>
          <div className="recruit__note--add">
          <AddNote recruit={this.props.recruit}/>
          </div>
        </div>
      );
    }
  }

  render(){

    let itemClassName = `item item--state-${this.props.recruit.state}`;
    let EditText
    return (
      <div className={itemClassName}>
        <div className="recruit">
          <p className="recruit__name"> {this.props.recruit.name} </p>
          <div className="recruit__actions">
          <button className="button"
            onClick={()=>{
              this.setState({showOptions:!this.state.showOptions})
                if (this.state.showOptions){
                  this.setState({editText:"Edit"})
                } else {
                  this.setState({editText:"Close"})
                }
              }
            }> {this.state.editText} </button>
            <button className="button button--round"
                onClick={()=>Recruits.remove(this.props.recruit._id)}>X</button>
          </div>
        </div>
        <div className="recruit__note">
        {this.renderNote()}
        </div>
        {this.renderOptions()}
      </div>

    );
  }
}
