import React, { Component } from 'react';
import ResponsivePlayer from '../components/ResponsivePlayer';
import Modules from './Modules';
import Experts from './Experts';
import './MainScreen.css';
import { connect } from 'react-redux';

import * as moduleAction from '../store/action/module';


export class MainScreen extends Component {
  
    render() {
        if(this.props.introVideo){ 
            console.log(this.props.introVideo);
            console.log(this.props.name);
            console.log(this.props.description);
        }
        return (
            <div className="p-1">
                <div className='row m-1'>
                    <div className='videoPlayer p-0 m-0 col-md-7'>
                        <ResponsivePlayer video={this.props.introVideo ? this.props.introVideo: null }/>  
                    </div>
                    <div className='modulesList ml-5 col-md-5'>
                     <Modules/>
                    </div> 
                </div>
                <div className="row mt-5">
                    <div className="col-sm-7">
                        <h4> Description</h4>
                       <div className="underLine"></div>
                       <p>{this.props.description ? this.props.description: null }</p>
                    </div>
                </div>

                <div className="expertsList mt-4 mb-2">
                <h4>Experts Panel</h4>
                <div className="underLine mt-1"></div>
                    <Experts/>   
                </div>
            </div>      
        )
    }
}

const mapStateToProps = state => {
    return{
        name: state.modules.name,
        description: state.modules.description,
        introVideo: state.modules.introVideo,
        module: state.modules.module,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
     
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(MainScreen);
