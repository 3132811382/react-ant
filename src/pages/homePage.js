import React from 'react';
import SildeMenu from '../components/sildeMenu';
import NavTopMenu from '../components/navTop';

class HomePage extends React.Component{
  render() {
    return(
      <div className="homePage">
        <div className="left-nav">
          <SildeMenu></SildeMenu>
        </div>
        <div className="right-main">
          <NavTopMenu></NavTopMenu>
          <div className="main-content">
            {this.props.children}
          </div>
        </div> 
      </div>
    )
  }
}
export default HomePage;