import { Form, Col, Row, Container, Button} from "react-bootstrap";
import './Login.css'
import { useUserContext } from "../../context/UserContextProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {login, user} = useUserContext();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const navigate = useNavigate();

  const onChangeHandler = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    if(formData.email === 'test@test.com' && formData.password ==='test'){
      login(formData.email, formData.password)
      setError('')
      navigate("/")
      return;
    }
    setError('Wrong username or password!')
  }

  return (
    <div className="login-form ">
      {error && <p className="text-danger">{error}</p>}
      <Form md={6} className="p-4 d-flex flex-column " onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formPlaintextEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="email@example.com"  className="input-field" name="email" onChange={onChangeHandler}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlaintextPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" className="input-field" name="password" onChange={onChangeHandler}/>
        </Form.Group>

        <Button type="submit" className="btn btn-main">
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login
