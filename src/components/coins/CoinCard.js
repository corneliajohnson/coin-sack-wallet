import React from "react";
import { ListGroupItem, Row, Col } from "reactstrap";

const CoinCard = ({ coin }) => {
  return (
    <ListGroupItem action tag="button">
      <Row class="row">
        <Col class="col">{coin.icon}</Col>
        <Col class="col-5">
          <span>{coin.name}</span>
          <br /> <span>{coin.symbol}</span>
        </Col>
        <Col class="col-6">
          <span>${coin.holdingDollarAmount}</span>
          <br />
          <span>{coin.holdingCoinAmount}</span>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default CoinCard;
