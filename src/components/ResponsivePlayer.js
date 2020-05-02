import React from 'react';
import ReactPlayer from 'react-player';
import './ResponsivePlayer.css';

const ResponsivePlayer = (props) => {
    return(
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={props.video}
                controls={true}
            />
      </div>
    );
}

export default ResponsivePlayer;
