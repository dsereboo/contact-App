import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col} from "react-bootstrap"

function App() {
  return (
    <Container>
      <Row>
        <h1>Contact APP</h1>
      </Row>
      <Row>
        <Col md={4}>
          <p>User form</p>
        </Col>
        <Col>
          <p>Users on display</p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
