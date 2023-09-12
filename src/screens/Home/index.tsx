import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import styled from "styled-components";

import { PapersForm } from "./components/PapersForm";
import { PeopleForm } from "./components/PeopleForm";
import { UsersForm } from "./components/UsersForm";

export const Home = () => {
  return (
    <BoxContainer>
      <Box w="390px">
        <Tabs>
          <TabList>
            <Tab>Papel</Tab>
            <Tab>Pessoa</Tab>
            <Tab>Usuários</Tab>
          </TabList>

          <TabPanels>
            <TabPanelStyled>
              <PapersForm />
            </TabPanelStyled>
            <TabPanelStyled>
              <PeopleForm />
            </TabPanelStyled>
            <TabPanelStyled>
              <UsersForm />
            </TabPanelStyled>
          </TabPanels>
        </Tabs>
      </Box>
      <Spacer />
      <Box w="auto">
        <Divider orientation="vertical" />
      </Box>
      <Spacer />

      <Box w="auto">dadwdawd</Box>
    </BoxContainer>
  );
};

export const BoxContainer = styled(Flex)`
  justify-content: space-evenly;
  width: 100%;
  border: 1px solid red;
`;

export const TabPanelStyled = styled(TabPanel)`
  height: 21.875rem;
`;
