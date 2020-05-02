import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as moduleAction from '../store/action/module';
import ModuleListCard from '../components/ModuleListCard';

import {Spinner,Accordion,Button,Card} from 'react-bootstrap';

export class Modules extends Component {
    state={
        isClicked:false,
    }
    
    loadModule = (moduleId) => {
        this.props.moduleLoader(moduleId);
    }

    render() {
        let moduleItems =  <Spinner animation="grow" variant="info" classname="m-auto"/>;
        let moduleChapters = <Spinner animation="grow" variant="info" classname="m-auto"/>;

        if(this.props.module){
            let chapterNumber = 1;
            moduleChapters = this.props.module.map(chpt=>{
                return <ModuleListCard 
                        key={chpt.id}
                        title={`Chapter ${chapterNumber++}`}
                        name={chpt.title}
                        modExpPic={chpt.chapterExperts[0].profilePic}
                        duration={chpt.duration}
                        />
            })

        }

        if(this.props.modules){
            moduleItems = this.props.modules.map( mod =>{
              return (
                <div key={mod.id}>  
                <Accordion.Toggle as={Button} variant="link" eventKey={mod.id}>
                    <ModuleListCard
                        id={mod.id}
                        title={mod.title}
                        name={mod.name}
                        duration={mod.duration}
                        modExpPic={mod.moduleExperts[0].profilePic}
                        loadModule={this.loadModule}
                    /> 
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={mod.id}>
                    <div>
                        {moduleChapters}
                    </div>
                </Accordion.Collapse>
                </div>
                );
            });
        }
        return (
           <div className="p-3">
               <Accordion className="m-0 p-0">
                 {moduleItems}
                </Accordion>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        modules: state.modules.modules,
        module: state.modules.module
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchMoules: () => dispatch(moduleAction.initModules()),
        moduleLoader : (moduleId) => dispatch(moduleAction.getModule(moduleId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modules);
