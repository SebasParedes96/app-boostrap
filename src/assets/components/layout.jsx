import React ,{ useState }  from "react";
import Navbar from 'react-bootstrap/Navbar'
import Card  from 'react-bootstrap/Card'
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/esm/Button";

const Layouts = (props) => {

    const [visible, setVisible] = useState(false)

    const handleVisible = () => setVisible(prev => !prev)
        return(
            <Navbar bg="light">
            <Container>
              <Navbar.Brand> Componente 1</Navbar.Brand>
              <Button > ver </Button>
              {
                props.visible ? 
                <Card style={{visibility: 'hidden'}} > estoy</Card>
                : null
              }
            </Container>
          </Navbar>
        );
}

export default Layouts
