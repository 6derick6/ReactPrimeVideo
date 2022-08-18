import './style.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Cadastro() {
    return(
        <div className='back'>
          <div className='caixa'>
            <div className='formulario_login'>
               <div className='cadastro_text'>Registration</div> 
               <Form>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="last_name" placeholder="Enter Last Name" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Paraná</option>
                            <option>Santa Catarina</option>
                            <option>Rio Grande do Sul</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>

                    <Button className='btn_concluir' variant="primary" type="submit">
                        Conclude
                    </Button>
            </Form> 
            </div>
          </div> 

          <div className='voltar'>
                    <Button className='btn_voltar' variant="primary" type="submit">
                            Cancel
                    </Button>
         </div>

        </div>

    )

}

export default Cadastro;