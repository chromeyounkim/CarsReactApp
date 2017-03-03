import React from 'react';
import {Link} from 'react-router';

class Cars extends React.Component {
  render() {
    const cars = this.props.route.data;
    const c = cars.map(car => (
        <Link
           to={"/cars/"+car.id}
           className="list-group-item"
           key={car.id}>
           {car.name}
         </Link>
      )
    );
    return (
      <div>
        <h1>Cars</h1>
        <div className="list-group">
          {c}
        </div>
      </div>
    );
  }
}

export default Cars;