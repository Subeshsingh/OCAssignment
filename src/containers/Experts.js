import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as expertAction from '../store/action/expert';
import ExpertCard from '../components/ExpertCard';
import {CardColumns,Spinner} from 'react-bootstrap';


export class Experts extends Component {
    
    render() {
       let experts= <Spinner animation="border" variant="primary" className="m-auto"/>;
       if(this.props.experts){
            console.log(this.props.experts);
          experts = this.props.experts.map(ele =>{
                return <ExpertCard 
                        key={ele.id}l
                        title={ele.title}
                        profilePic={ele.profilePic}
                        name={ele.expertName}
                        qualification={ele.qualification}/>
            })
       }

        return (
            <>
                <div className="row">
                  {experts}
                </div>
             </>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        experts: state.experts.experts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getExperts: () => dispatch (expertAction.initExperts()),
    }
}

export default connect( mapStatetoProps, mapDispatchToProps )(Experts);
