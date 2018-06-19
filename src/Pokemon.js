import React, { Component } from 'react'

import './Pokedex.css'

class Pokemon extends Component{

    constructor(props){
        super(props)

        this.state = {
            pokemon: {}
        }

        this.fetchUserData()
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.pokemonNum !== this.props.match.params.pokemonNum){
            this.fetchUserData()
        }
    }

    fetchUserData = () => {
        fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${this.props.match.params.pokemonNum}/`)
            .then(response => response.json())
            .then(pokemon => this.setState({pokemon}))
    }

    render(){
        const {pokemon} = this.state

        return(
            <div className="Pokemon">
                <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.match.params.pokemonNum}.png`} 
                    alt="" />
                <h2>
                    {pokemon.name}
                </h2>
                <h3>
                    {pokemon.weight} lbs
                </h3>
            </div>
        )
    }

}

export default Pokemon