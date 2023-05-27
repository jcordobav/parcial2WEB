import { Container, Row, Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import "./CardDetail.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext";

export default function CardDetail({ name, isbn, intl }) {
  const { userRole } = useContext(AuthContext);
  console.log("Este es el sapo hpta rol: " + userRole);
  return (
    <Container>
      <Col>
        <p className="title">{name}</p>
        <Row>
          <Col>
            <p className="title_sec">ISBN</p>
          </Col>
          <Col>
            {userRole !== "Administrador" && <p className="content">{isbn}</p>}
            {userRole === "Administrador" && <input defaultValue={isbn} />}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="title_sec">
              <FormattedMessage id="author" />
            </p>
          </Col>
          <Col>
            {userRole !== "Administrador" && (
              <p className="content">Juan José Córdoba</p>
            )}
            {userRole === "Administrador" && (
              <input value="Juan José Córdoba" />
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="title_sec">
              <FormattedMessage id="publisher" />
            </p>
          </Col>
          <Col>
            {userRole !== "Administrador" && (
              <p className="content">Elsevier</p>
            )}
            {userRole === "Administrador" && <input defaultValue="Elsevier" />}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="title_sec">
              <FormattedMessage id="genre" />
            </p>
          </Col>
          <Col>
            {userRole !== "Administrador" && (
              <p className="content">
                <FormattedMessage id="travel" />
              </p>
            )}
            {userRole === "Administrador" && (
              <input value={<FormattedMessage id="travel" />} />
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="title_sec">
              <FormattedMessage id="year" />
            </p>
          </Col>
          <Col>
            {userRole !== "Administrador" && (
              <p className="content">
                <FormattedMessage id="2020" />
              </p>
            )}
            {userRole === "Administrador" && (
              <input value={<FormattedMessage id="2020" />} />
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="title_sec">
              <FormattedMessage id="available_online" />
            </p>
          </Col>
          <Col>
            {userRole !== "Administrador" && (
              <p className="content">
                <FormattedMessage id="yes" />
              </p>
            )}
            {userRole === "Administrador" && (
              <input value={<FormattedMessage id="yes" />} />
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="title_sec">
              <FormattedMessage id="price" />
            </p>
          </Col>
          <Col>
            {userRole !== "Administrador" && (
              <p className="content">
                <FormattedMessage id="50" />
              </p>
            )}
            {userRole === "Administrador" && (
              <input value={<FormattedMessage id="50" />} />
            )}
          </Col>
        </Row>
        <p className="title_sec">
          <FormattedMessage id="summary" />
        </p>
        {userRole !== "Administrador" && (
          <p className="content">
            <FormattedMessage id="large_text" />
          </p>
        )}
        {userRole === "Administrador" && (
          <input value={<FormattedMessage id="large_text" />} />
        )}
      </Col>
    </Container>
  );
}
