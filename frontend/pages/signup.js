import SignUp from "../components/Signup";
import styled from "styled-components";
import Signin from "../components/Signin";
import RequestReset from "../components/RequestReset";

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const signUp = props => (
  <Columns>
    <SignUp />
    <Signin />
    <RequestReset />
  </Columns>
);

export default signUp;
