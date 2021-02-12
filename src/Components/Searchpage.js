import React from 'react'
import '../App.css';
import pokeData from '../Data'
import PokeList from './PokeList';
import Dropdown from './Dropdown';
//import Sort from './Sort';


export default class SearchPage extends React.Component {

    state = {
        pokemonArray: pokeData,
        type_1A: '',
        type_2: '',
        sortBy: 'pokemon',
        query: '',
        _id:'',
        
      }
 
  handletype_1AChange = (e) => { this.setState({ type_1A: e.target.value})} 

  handletype_2Change = (e) => { this.setState({ type_2: e.target.value })}

  handleSortChange = (e) => { this.setState({ sortBy: e.target.value })}

  handleInputChange = (e) => { this.setState({ query: e.target.value })}


  render() {

    console.log(this.state, 'IDK')

    if(this.state.sortBy){
       
            this.state.pokemonArray.sort((a,b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
}

      const filteredPoke = this.state.pokemonArray.filter((newPoke) => {
          if(!this.state.query){
              return true;
          }

          if (this.state.query){
              if(newPoke.pokemon.includes(this.state.query)) return true;
          }

        return false; 
      });


      return (
        <>
          <input onChange={this.handleInputChange} placeholder='search bar'/>
          
           <PokeList filteredPoke={filteredPoke} />
        </>
    );
  }
}