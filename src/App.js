import React, { Component } from 'react'
import './App.css'

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {

  state = {
    value: 'initial value'
  }

  updateSelection = (event) => this.setState({value: event.target.value})
  
  render() {

    return (
      <div className="App">
        <select onChange={this.updateSelection}>
          <option value="">--pick a model--</option>
          {Object.entries(data).map(([key, value], i) =>
            <option key={i} value={key}>{key} ({value.year})</option>
            )
          }
        </select>
      </div>
    )
  }
}

export default App
