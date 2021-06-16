import {Container, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';

function App(props) {
  return (
    <Container >
      <Row className="no-flex">
        <h1 className="text-center">Contacts</h1>
      </Row>
      <Row>
        <Col md={{span:4}}>
          <AddContact/>
        </Col>
        <Col>
          <Contacts ed/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
