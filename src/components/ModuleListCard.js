import React from 'react';
import {Card} from 'react-bootstrap';
import './ModuleListCard.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const ModuleListCard = (props) => {
    return (
        <Card className="my-3" onClick={()=>props.loadModule(props.id)}>
            <div className="row my-1 p-1">
                <div className="col-2 mr-1">
                     <img className="roundedImage" src={props.modExpPic} alt="Smiley face" height="42" width="42"/>
                </div>
                <div className="col-9 moduleText">
                    <div className="m-0 title">
                        <span className="modTitle">{props.title} - </span>
                        <span className="modName">{props.name}</span>
                        <span className="float-right durationText">
                            <FontAwesomeIcon icon={faClock} className="mx-1 icon"/>      
                                {props.duration}mins
                        </span>
                    </div>
                </div> 
            </div>
        </Card>
    )
}

export default ModuleListCard
