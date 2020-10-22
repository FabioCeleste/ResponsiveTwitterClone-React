import React from 'react';
import SitckyBox from 'react-sticky-box';

import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import List from '../List';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
 } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <SitckyBox>
        <Body>
          <List title="Talvez você curta" elements={[
            <FollowSuggestion
              name="Solid Snake"
              nickname="@david" />,
            <FollowSuggestion
              name="Master Chief"
              nickname="@john117" />,
              <FollowSuggestion
              name="Yorick"
              nickname="@yorick_mori" />
          ]} />
          <List title="Talvez você curta" elements={[
            <News />,
            <News />,
            <News />
          ]} />
          <List title="Talvez você curta" elements={[
            <News />,
            <News />,
            <News />
          ]} />
          <List title="Talvez você curta" elements={[
            <News />,
            <News />,
            <News />
          ]} />
        </Body>
      </SitckyBox>
    </Container>
  );
};

export default SideBar;
