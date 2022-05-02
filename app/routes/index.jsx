import { Outlet } from "@remix-run/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function ContractRoute() {
  return (
    <div>
      <Wrapper>
        <WrapperContract>
          <Link to="/contract">Contact</Link>
        </WrapperContract>
        <WrapperContractstart>
          <Link to="/contract">Start</Link>
        </WrapperContractstart>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  background-color: #b30e15;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const WrapperContract = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
  font-size: 36px;
  padding: 30px;
  a {
    text-decoration: none;
    color: white;
  }
`;

const WrapperContractstart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
  font-size: 36px;
  padding: 30px;
  a {
    text-decoration: none;
    color: white;
  }
`;
