import React,{Component} from 'react';
import Card from 'react-bootstrap/Card'

export default class Futer extends Component{
    render() {
        return( <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.props.fname}</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>)
    }
}