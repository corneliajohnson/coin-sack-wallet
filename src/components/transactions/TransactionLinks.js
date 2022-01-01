import SendLink from "./SendLink";
import RecieveLink from "./RecieveLink";
import { Button, ButtonGroup } from "reactstrap";

const TransactionLinks = () => {
  return (
    <div className="d-flex justify-content-center">
      <ButtonGroup className="w-50" color="primary">
        <Button>
          <SendLink />
        </Button>
        <Button>
          <RecieveLink />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default TransactionLinks;
