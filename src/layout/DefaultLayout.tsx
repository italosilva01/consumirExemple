import styled from "styled-components";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const Content = () => {
  return (
    <PageContentContainer>
      <Outlet />
    </PageContentContainer>
  );
};

export const PageContentContainer = styled(Box)`
  max-width: 74rem;
  margin: 5rem auto;
  padding: 2.5rem;
  height: calc(100vh - 10rem);

  border-radius: 8px;
  display: flex;

  flex-direction: column;
`;
