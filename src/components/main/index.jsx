import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Y.Kim</a>
            </div>
            <div className="collapse navbar-collapse">
               <ul className="nav navbar-nav">
                 <li><Link activeClassName="active" to="/">Home</Link></li>
                 <li><Link activeClassName="active" to="/cars">Cars</Link></li>
                 <li><Link activeClassName="active" to="/about">About</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;