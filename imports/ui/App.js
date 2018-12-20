import React from 'react';
import TitleBar from './TitleBar';
import AddRecruit from './AddRecruit';
import RecruitList from './RecruitList';
import PropTypes from 'prop-types';


export default class App extends React.Component {
  render() {
    return(
      <div>
        <TitleBar title={this.props.title} />
        <div className="wrapper">
          <RecruitList recruits={this.props.recruits}/>
          <AddRecruit/>
        </div>
      </div>
    );
  }
};

App.propTypes = {
  title: PropTypes.string.isRequired
}
