import { Outlet } from "@remix-run/react";
import styled from "styled-components";
export default function ContractRoute() {
  return (
    <div>
      <Wrapper>
        <WrapperContract>contact</WrapperContract>
      </Wrapper>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const Wrapper = styled.div`
  background-color: #b30e15;
  width: 100%;
`;

const WrapperContract = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;
  font-size: 36px;
  color: white;
  padding: 30px;
`;
