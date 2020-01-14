import React,{Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {parametrs} from "../api/api";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

 class Teams extends Component{
    componentDidMount() {
        const members = parametrs.getteams();
        members.then((mems)=>{
            this.props.onTeams(mems)
        })
    }

    render() {
        return (
            <div>
                <div className='divnamefuter'><h1>Our Teams</h1></div>
                {this.props.teams.map((team,index) => (
                    <Link to={'/teams/'+team.id} key={'teams'+index}>
                    <Card style={{ width: '18rem' }}  >
                        <Card.Img variant="top" src={window.location.href+team.image} className='cardimage'/>
                        <Card.Body>
                            <Card.Title>{team.name}</Card.Title>
                            <Card.Text>
                                {team.developer}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card></Link>
                ))}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        teams:state.teams,
    }
}
function mapDispatchToProps(dispatch) {
    return{
        onTeams:(mem)=>{dispatch({type: "TEAMS",mem})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Teams)