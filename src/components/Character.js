import React from 'react';
import styled from 'styled-components';

export default function Character(props){
    const { name, mass } = props;
    
    const Card = styled.div`
        background-color: white;
        margin: 5%;
        border: grey 1px solid;
        border-radius: 20px;
    `

    return (
        <Card>
            <h2>{name}</h2>
            <p>HOW BIG DO THEY BE THO??? {mass}</p>
        </Card>
    );
}
