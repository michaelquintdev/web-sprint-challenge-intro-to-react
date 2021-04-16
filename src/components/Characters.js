import React from 'react';
import Character from './Character';

export default function Characters(props){
    const {characters} = props;
    return (
        <div>
            {characters.map(character => {
                return(
                    <Character 
                        key = {character.name}
                        name = {character.name}
                        mass = {character.mass}
                    />
                )
            })}
        </div>
    )
}