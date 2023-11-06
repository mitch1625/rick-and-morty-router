import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cards from '../components/CharacterCard';

const CharacterPage = () => {
    
    const [characters, setCharacters] = useState([]) 

    const getCharInfo = async() => {
        let response = await axios.get('https://rickandmortyapi.com/api/character')
    
        setCharacters(response.data.results)
    }
    
    useEffect(() => {
        getCharInfo();
    }, [])
    
    console.log(characters)
    return (<>
        <h2>Character page</h2>

        {characters.map((character, index) => (
            <Cards
                key={index}
                name = {character.name}
                image = {character.image}
                species = {character.species}
                status = {character.status}
                />
        ))}




        </>
    )
}



export default CharacterPage