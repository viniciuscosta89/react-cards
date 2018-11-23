import React, { Component, Fragment } from 'react';
// import axios from 'axios';

import CardCollab from './components/CardCollab';

class App extends Component {
  state = {
    courses: [
      {
        id: 1,
        name: "ReactJS",
        price: 25,
        description: "The best framework NOW!",
        btnName: "Buy"
      }, {
        id: 2,
        name: "VueJS",
        price: 50,
        description: "It has more stars than ReactJS @ GitHub",
        btnName: "Buy"
      }, {
        id: 3,
        name: "EmberJS",
        price: 10,
        description: "Old school JS framework",
        btnName: "Buy"
      }, {
        id: 4,
        name: "AngularJS",
        price: 100,
        description: "Google's framework",
        btnName: "Do not buy!"
      }
    ]
  };

  //// Para utilizar os dados de uma API, utilizando AXIOS, descomente o código abaixo e o 'import' do AXIOS e remova os dados do state 'courses' acima ////

  // componentDidMount() {
  //   axios.get('https://api.myjson.com/bins/amyu6')
  //     .then(({ data }) => {
  //       this.setState({
  //         courses: data.courses
  //       })
  //     })
  // }

  render() {
    const { courses } = this.state;
    return (
      <Fragment>
        <main className="container">
          <div className="grid">
          {/* {courses.map(({ name, price, description, btnName }) => (
              <CardCollab
                name={name}
                price={price}
                description={description}
                btnName={btnName} />
            )
          })} */}

          {/* Usando Spread Operator */ }

          {courses.map((course =>
            <CardCollab {...course} key={course.id} />
          ))
          }
          </div>
        </main>
      </Fragment>
    )
  }
}

export default App;
