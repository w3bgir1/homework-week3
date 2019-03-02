import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ModelDetails extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    }
    
    render() {
        const data = this.props.data

        return (
            <div>
                {(data.length > 0) && data.map(item=> {
                    return (
                        <ul key={Math.random()*10}>
                            <li>Name: {item.name}</li>
                            <li>Manufacturer: {item.manufacturer}</li>
                            <li>Year: {item.year}</li>
                            <li>Origin: {item.origin}</li>
                        </ul>
                        )
                    })
                }
            </div>
        )
    }
}