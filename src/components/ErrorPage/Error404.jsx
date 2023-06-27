import { Container, Row, Col, Image } from 'react-bootstrap';

function Error404() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col md={6} className="text-center ">
            <Image src="https://th.bing.com/th/id/OIP.FuWXD5OAEc4mJwGp4swt0QHaEF?w=317&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" fluid />
            <h1>404</h1>
            <p>Sorry, the page you requested could not be found.</p>
          </Col>
        </Row>
      </Container>
    );
  }
  export default Error404;