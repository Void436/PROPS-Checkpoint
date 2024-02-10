import React from 'react';
import Player from './Player.js';
import players from './players';
import 'bootstrap/dist/css/bootstrap.min.css';

//just for the "use of comments"

const PlayersList = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center' , color: 'red' , fontFamily:'bold' , fontSize:'50px'}}>Players List</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' , opacity:0.9}}>
                {players.map(player => (
                    <Player key={player.id} {...player} />
                ))}
            </div>
        </div>
    );
};

//just for the "use of comments"

export default PlayersList;