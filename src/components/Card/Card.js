import { Container } from "react-bootstrap";
import "./Card.css";

export default function Card({image, name, isbn, onClick}) {
  return (
    <Container>
      <div className="card" style={{ width: "14rem" }} onClick={() => onClick(name, isbn)}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            ISBN: {isbn}
          </p>
        </div>
      </div>
    </Container>
  );
}