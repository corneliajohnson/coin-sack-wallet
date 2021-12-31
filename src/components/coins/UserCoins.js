import { ListGroup } from "reactstrap";
import CoinCard from "./CoinCard";

function UserCoins() {
  const userCoinsArray = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      holdingDollarAmount: "100000.00",
      holdingCoinAmount: "2",
      icon: "X",
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      holdingDollarAmount: "5000.00",
      holdingCoinAmount: "1.5",
      icon: "X",
    },
    {
      id: 3,
      name: "Tether",
      symbol: "USDT",
      holdingDollarAmount: "100.00",
      holdingCoinAmount: "100",
      icon: "X",
    },
  ];
  return (
    <>
      <h4>Coins</h4>
      <ListGroup className="w-75">
        {userCoinsArray.map((coin) => (
          <CoinCard coin={coin} key={coin.id} />
        ))}
      </ListGroup>
    </>
  );
}

export default UserCoins;
