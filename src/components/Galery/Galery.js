import { Col, Container, Row } from "react-bootstrap";
import { FormattedMessage } from 'react-intl';
import "./Galery.css";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import CardDetail from "../CardDetail/CardDetail";

export default function Galery() {
  const [cards, setCards] = useState([]);
  const [cardSelected, setCardSelected] = useState(null);

  useEffect(() => {
    const URL = "http://localhost:3000/books";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setCards(data);
      });
  }, []);

  const handleCardClick = (name, isbn) => {
    setCardSelected({name, isbn});
  }


  const rows = [];
  for (let i = 0; i < cards.length; i += 3) {
    rows.push(
      <Row key={i}>
        <Col>
          <Card image={cards[i].image} name={cards[i].name} isbn={cards[i].isbn} onClick={handleCardClick} />
        </Col>
        {i + 1 < cards.length && (
          <Col>
            <Card image={cards[i + 1].image} name={cards[i + 1].name} isbn={cards[i + 1].isbn} onClick={handleCardClick} />
          </Col>
        )}
        {i + 2 < cards.length && (
          <Col>
            <Card image={cards[i + 2].image} name={cards[i + 2].name} isbn={cards[i + 2].isbn} onClick={handleCardClick} />
          </Col>
        )}
      </Row>
    );
  }

  return (
    <Container>
      <Row className="row_principal">
        <Col xs={8}>
          {rows}
        </Col>
        <Col xs={4} className="detail_component">
            {cardSelected !== null && 
          <CardDetail name= {cardSelected.name} isbn={cardSelected.isbn} />
            }
            {cardSelected === null && 
          <div> <FormattedMessage id="no_selected_card"/></div>
            }
        </Col>
      </Row>
    </Container>
  );
}