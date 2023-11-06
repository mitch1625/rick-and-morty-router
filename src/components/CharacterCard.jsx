import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({name, image, species, status}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            Species: {species}<br></br>
            Status : {status}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;