 import React from 'react';

import { Card } from "../card/card.component";

import './card-list.styles.css';

export const CardList = props => (

    <div className='card-list'>
    {props.Monsters.map(Monsters => (
        <Card key={Monsters.id} Monsters={Monsters}/>
        ))}
        </div>
);