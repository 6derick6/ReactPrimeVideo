import './style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    return(
        <div className='box'>
            <div className='formulario_login'>
               <div className='login_text'>Login</div> 
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control className='form_login' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control className='form_login' type="password" placeholder="Password" />
                </Form.Group>
                <Button className='btn_acessar' variant="primary" type="submit">
                    Acessar
                </Button>
            </Form>
            </div>
        </div>
    )

}

export default Login;