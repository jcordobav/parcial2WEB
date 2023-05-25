import { Container, Row, Col } from "react-bootstrap";
import "./Login.css";
import Libros from "../../Assets/Images/libros.png";
const { useEffect, useState } = require("react");

const API_URL = 'http://localhost:3000/login';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  console.log(password)

  const validate = () => {
    const errors = {};
    if (!email) errors.email = "El usuario es requerido";
    if (!password) errors.password = "La contraseña es requerida";
    if (password.length < 6)
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    return errors;
  };

  const sendData = async () => {
    if (email !== "" && password !== "") {

      if (password.length < 6) {
        setErrors({ password: "La contraseña debe tener al menos 6 caracteres" });
        return;
      }

      try {


        const datosEnviados = { email, password };

        const response = await fetch(`${API_URL}/auth/login`, {
          method: 'POST',
          body: JSON.stringify(datosEnviados),
          headers: {
            'Content-Type': 'application/json'
          }
        })


        if (!response.ok) {

          throw new Error("La red no responde");

        }
        console.log(datosEnviados)

        const data = await response.json();
        sessionStorage.setItem('token', data.token);
        console.log("Por Dios bendito: ", data);
        //navigate('/');
        
      } catch (error) {
        console.error("Tenemos un problema con el inicio de sesión:", error);
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {

      console.log("Enviar datos de registro", { email, password });
      sendData();
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <Container className="container_principal">
        <Container className="container_secundario">
          <Row className="row_login">
            <Col className="col_img">
              <Col className="col_img_detail">
                <img src={Libros} alt="" className="footer__img" />
              </Col>
              <Col className="col_img_text">
                Encuentra hasta el libro que no estabas buscando
              </Col>
            </Col>

            <Col className="col_login">
              <Col className="title">Tu Libreria Aliada</Col>
              <Col className="user_name">
                <label>
                  Users name or email:
                  <input type="text" name="name" onChange={(e) => setEmail(e.target.value)}/>
                  {errors.user && <span>{errors.user}</span>}
                </label>
              </Col>
              <Col className="password">
                <label>
                  password
                  <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
                  {errors.user && <span>{errors.user}</span>}
                </label>
              </Col>
              <Col>
                <button type="button" class="btn btn-primary" className="button-sing-up" onClick={handleSubmit}>
                  Sign up
                </button>
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
