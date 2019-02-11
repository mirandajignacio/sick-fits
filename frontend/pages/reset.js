import RequestReset from "../components/RequestReset";
import Reset from "../components/Reset";

const resetPage = props => (
  <div>
    <p>Reset your password</p>
    <Reset resetToken={props.query.resetToken} />
  </div>
);
export default resetPage;
