import { useState } from "react";
import { Button, Navbar, Container, NavDropdown, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
// import bgImg from './img/bg.png';
import data from './data.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/Detail.js'

const DataList = (props) => {
  return(
    <>
      <img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id +1}.jpg`} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </>
  )
}

function App() {

  let [shoes]  = useState(data)
  let navigate = useNavigate()

  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('') }}>Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={()=> { navigate('') }}>Home</Nav.Link>
                <Nav.Link onClick={()=> { navigate('detail') }}>Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            {/* <div className='main-bg' style={{backgroundImage : 'url('+bgImg+')'}}></div> */}
            <div className='main-bg' style={{backgroundImage : 'url('+process.env.PUBLIC_URL + '/img/bg.png'+')'}}></div>
            <Container>
              <Row>
                {
                  shoes.map((a,i)=>{
                    return(
                      <Col key={i}>
                        <DataList shoes={shoes[i]} />
                      </Col>
                    )
                  })
                }
              </Row>
            </Container>
          </>        
        } />
        <Route path="/detail" element={<Detail/>} />
        <Route path="*" element={<div>없는 페이지입니다.</div>} />
      </Routes>

    </div>
  );
}

export default App;
