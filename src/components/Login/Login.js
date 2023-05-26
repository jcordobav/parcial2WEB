import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { Container, Row, Col } from "react-bootstrap";
import "./Login.css";
import Libros from "../../Assets/Images/libros.png";
const { useEffect, useState } = require("react");

const API_URL = "http://localhost:3000/login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!validator.isEmail(email))
      errors.email = "El formato de email no es el correcto";
    if (!password) errors.password = "La contraseña es requerida";
    if (password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    } else {
      delete errors[password]; // Eliminar el error de la contraseña si cumple con los requisitos
    }
    return errors;
  };

  const sendData = async () => {
    if (email !== "" && password !== "") {
      if (password.length < 6) {
        setErrors({
          password: "La contraseña debe tener al menos 6 caracteres",
        });
        return;
      }

      try {
        const datosEnviados = { email, password };
        const response = await fetch(API_URL, {
          method: "POST",
          body: JSON.stringify(datosEnviados),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("La red no responde");
        }
        const data = await response.json();
        sessionStorage.setItem("token", data.token);
      } catch (error) {}
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.entries(errors).length === 0) {
      setShouldRedirect(true);
      sendData();
      setErrors({});
    } else {
      setErrors(errors);
      setShouldRedirect(false);
    }
  };

  useEffect(() => {
    if (shouldRedirect) {
      navigate("/home");
    }
  }, [shouldRedirect]);

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
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <span>{errors.email}</span>}
                </label>
              </Col>
              <Col className="password">
                <label>
                  <Row>
                    password
                    <Col>
                      <input
                        type="text"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {errors.password && <span>{errors.password}</span>}
                    </Col>
                  </Row>
                </label>
              </Col>
              <Col>
                <button
                  type="button"
                  className="button-sing-up"
                  onClick={handleSubmit}
                >
                  Sign in
                </button>
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
