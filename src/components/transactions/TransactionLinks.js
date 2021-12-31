import SendLink from "./SendLink";
import RecieveLink from "./RecieveLink";
import { Button, ButtonGroup } from "reactstrap";

const TransactionLinks = () => {
  return (
    <ButtonGroup className="w-50" color="primary">
      <Button>
        <SendLink />
      </Button>
      <Button>
        <RecieveLink />
      </Button>
    </ButtonGroup>
  );
};

export default TransactionLinks;
