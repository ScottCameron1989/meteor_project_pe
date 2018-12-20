import React from 'react';
import Recruit from './Recruit';
import Recruits from '../api/recruits';
import FlipMove from 'react-flip-move'

export default class RecruitList extends React.Component{
  renderRecruits(){
    if(this.props.recruits.length === 0){
      return (<p>No Sapper found</p>);
    } else {
      return this.props.recruits.map((recruit)=>{
        return <Recruit key={recruit._id} recruit={recruit}/>
      });
    }
  }
  render(){
    return (
      <div>
       <FlipMove maintainContainerHeight={true}>
          {this.renderRecruits()}
        </FlipMove>
      </div>
    );
  }
}
