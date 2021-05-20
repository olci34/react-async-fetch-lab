// create your App component here
import React, {Component} from 'react'

class App extends Component {

    constructor() {
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json').then(resp => resp.json()).then(data => this.setState({people: data.people}))
    }

    render() {
        return (
            <ul>
                {this.state.people.map((person) => <li>{person.name}</li>)}
            </ul>
        )   
    }
}

export default App