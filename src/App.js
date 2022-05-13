import {
  Col,
  Container,
  Row,
  Breadcrumb,
  Image,
  Carousel,
  Nav,
  Alert,
  Card,
  Button,
  Pagination,
  Table,
  Form,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function App() {
  return (
    <>
      {/*------Navbar------*/}
      <Navbar
        mb="10px"
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Company name
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*------Navbar------*/}
      
      <Container>
        {/*------Top------*/}
        <header className="my-3">
          <Row>
            <Col md="2" xs="3">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                rounded
                height="60"
              />
            </Col>

            <Col md="10" xs="6">
              <Nav
                variant="pills"
                defaultActiveKey="/home"
                className="d-flex justify-content-end"
              >
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Button2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </header>
        {/*------Top------*/}

        {/*------Breadcrumb------*/}
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#blog">
            Blog
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#data">Data</Breadcrumb.Item>
        </Breadcrumb>
        {/*------Breadcrumb------*/}

        <Alert variant="info">Example link</Alert>

        {/*------Carousel------*/}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://soliloquywp.com/wp-content/uploads/2018/11/nb_ist_cover.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://soliloquywp.com/wp-content/uploads/2019/04/nb_esc_cover.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://soliloquywp.com/wp-content/uploads/2019/01/nb_eca_cover.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/*------Carousel------*/}

        <div className="my-5">
          {/*------Cads------*/}
          <Row className="md-4">
            {[0, 1, 2, 3].map((item) => (
              <Col md="3" xs="6">
                <Card style={{ width: "auto" }}>
                  <Card.Img
                    variant="top"
                    src="https://media.sproutsocial.com/uploads/2019/09/how-to-write-a-blog-post.svg"
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {/*------Cards------*/}

          {/*------Pagination------*/}
          <Pagination className="d-flex justify-content-center my-5">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
          {/*------Pagination------*/}

          {/*------Table------*/}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>№</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3].map((idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/*------Table------*/}

          {/*------Form------*/}
          <Form className="mb-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          {/*------Form------*/}
        </div>
      </Container>
    </>
  );
}

export default App;
