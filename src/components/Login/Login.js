import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { AuthContext } from '../../AuthContext';
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { Container, Row, Col } from "react-bootstrap";
import "./Login.css";
import Libros from "../../Assets/Images/libros.png";
const { useEffect, useState } = require("react");

const API_URL = "http://localhost:3000/login";

export default function Login() {
    const { setUserRole } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [shouldRedirect, setShouldRedirect] = useState(false);
  

  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!validator.isEmail(email))
      errors.email = <FormattedMessage id="format_email"/>;
    if (password.length < 6) {
      errors.password = <FormattedMessage id="format_password"/>;
    } else {
      delete errors[password]; 
    }
    return errors;
  };

  const sendData = async () => {
    if (email !== "" && password !== "") {
      if (password.length < 6) {
        setErrors({
          password: <FormattedMessage id="format_password"/>,
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
        setUserRole(data.rol)
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
      <div className="container_principal">
        <div className="container_secundario">
          <Row className="row_login">
            <Col className="col_img">
              <Col className="col_img_detail">
                <img src={Libros} alt="" className="footer__img" width="50%" 
     height="60%" />
              </Col>
              <Col className="col_img_text">
              <FormattedMessage id="title_login"/>
              </Col>
            </Col>

            <Col className="col_login">
              <Col className="title"><FormattedMessage id="allied_library"/></Col>
              <Col className="user_name">
                <label>
                <FormattedMessage id="user_text"/>
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
                  <FormattedMessage id="password"/>
                    <Col>
                      <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        password = {true}
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
                  <FormattedMessage id="sign_in"/>
                </button>
              </Col>
            </Col>
          </Row>
        </div>
      </div>
  );
}
