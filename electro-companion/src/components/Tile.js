import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Tile extends React.Component {

    render() {
        return (
            <Card style={{ width: '18rem' }} className="tile">
                <Card.Img variant="top" src="tile.png" />
                <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                        sample text
                    </Card.Text>
                    <Button variant="primary">Go to product</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Tile;