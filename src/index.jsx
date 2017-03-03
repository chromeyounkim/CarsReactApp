import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Main from './components/main/index.jsx';
import Home from './components/home/index.jsx';
import About from './components/about/index.jsx';
import CarDetail from './components/cars/car-detail.jsx';
import Cars from './components/cars/index.jsx';

const data = [
 {
    id: 1,
    name: 'Honda Accord Ex',
    year: '2015',
    model: 'Accord',
    make: 'Honda',
    media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
    price: '$18,000'
  },
  {
      id: 2,
      name: 'Mercedes-Benz C300',
      year: '2016',
      model: 'C300',
      make: 'Mercedes Benz',
      media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
      price: '$778,157'

  },
  {
      id: 3,
      name: 'BMW X7 SUV',
      year: '2017',
      model: 'X7',
      make: 'BMW',
      media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
      price: '$98,999'
    }
];

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/cars" component={Cars} data={data}/>
      <Route path="/about" component={About} />
      <Route path="/cars/:id" component={CarDetail} data={data}/>
    </Route>
  </Router>,
  document.getElementById('container')
);