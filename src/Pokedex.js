import React, {Component} from 'react'
import { Route } from 'react-router-dom'

import './Pokedex.css'
import Pokemon from './Pokemon'

class Pokedex extends Component{

    state = {
        pokemonNum: '',
    }

    handleChange = (ev) => {
        this.setState({pokemonNum: ev.target.value})
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/pokedex/${this.state.pokemonNum}`)
    }

    render(){
        return(
            <div className="Pokedex">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg"
                    alt="Pokemon"
                    className="logo"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text"
                            value= {this.state.pokemonNum} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">
                            Enter pokémon number
                        </button>    
                    </div>
                </form>

                <Route path="/pokedex/:pokemonNum" component={Pokemon} />
            </div>
        )
    }

}

export default Pokedex