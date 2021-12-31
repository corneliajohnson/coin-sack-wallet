import WalletBalance from "./WalletBalance";
import TransactionLinks from "./transactions/TransactionLinks";
import UserCoins from "./coins/UserCoins";

const Home = () => {
  return (
    <div>
      <div>Profile Name</div>
      <WalletBalance />
      <TransactionLinks />
      <UserCoins />
      <div>Footer</div>
    </div>
  );
};

export default Home;
