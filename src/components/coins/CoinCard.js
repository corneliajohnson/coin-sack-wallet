import React from "react";
import { ListGroupItem, Row, Col } from "reactstrap";

const CoinCard = ({ coin }) => {
  return (
    <ListGroupItem action tag="button">
      <Row className="row">
        <Col className="col-1">{coin.icon}</Col>
        <Col className="col-3 ">
          <span>{coin.name}</span>
          <br /> <span>{coin.symbol}</span>
        </Col>
        <Col className="col-8">
          <span>${coin.holdingDollarAmount}</span>
          <br />
          <span>{coin.holdingCoinAmount}</span>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default CoinCard;
