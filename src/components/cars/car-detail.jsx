import React from 'react';
import {browserHistory} from 'react-router';

class CarDetail extends React.Component {
  goToCars() {
    browserHistory.push('/cars');
  }
  
  render() {
    const cars = this.props.route.data;
    const id = this.props.params.id;
    const filtered = cars.filter(c => {
        if (c.id == id) return c;
      }
    );
    return (
       <div>
         <h1>{filtered[0].name}</h1>
         <div className="row">
              <div className="col-sm-6 col-md-4">
                  <div className="thumbnail">
                      <img src={filtered[0].media} alt={filtered[0].name} />
                  </div>
              </div>
              <div className="col-sm-6 col-md-4">
                 <ul>
                     <li><strong>Model</strong>: {filtered[0].model}</li>
                     <li><strong>Make</strong>: {filtered[0].make}</li>
                     <li><strong>Year</strong>: {filtered[0].year}</li>
                     <li><strong>Price</strong>: {filtered[0].price}</li>
                 </ul>
              </div>
              <div className="col-md-12">
                  <button className="btn btn-primary" onClick={this.goToCars.bind(this)}>Go to Cars Page</button>
              </div>
        </div>
      </div>
    );
  }
}

export default CarDetail;