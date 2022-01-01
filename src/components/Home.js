import WalletBalance from "./WalletBalance";
import TransactionLinks from "./transactions/TransactionLinks";
import UserCoins from "./coins/UserCoins";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="mt-5">
      <div className="text-center">Profile Name</div>
      <WalletBalance />
      <TransactionLinks />
      <UserCoins />
      <Footer />
    </div>
  );
};

export default Home;
