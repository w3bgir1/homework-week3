import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import {addModel} from './actions/action'
import ModelDetails from './components/ModelDetails'

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
    name: null
  }

  updateSelection = (event) => {
    this.setState({name: event.target.value})
  }

  updateModels = () => {
    this.props.addModel(this.state.name, data[this.state.name])
  }
  
  render() {
    return (
      <div className="App">
        {
          this.props.data.map(
            model => <ModelDetails 
              key={model.name}
              name={model.name} 
              manufacturer={model.manufacturer} 
              year={model.year} 
              origin={model.origin}
            />
          )
        }
        
        <select onChange={this.updateSelection}>
          <option value="">--pick a model--</option>

          {Object.entries(data)
            .map(([key, value], i) =>
              <option key={i} value={key}>{key} ({value.year})</option>)
          }
        </select>
        <button onClick={this.updateModels}>Add</button>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    data: state
  }
}

export default connect(mapStateToProps, { addModel })(App)
