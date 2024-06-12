import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>

        <Logo />
        <SubscribeGroup>
          <SubscribeBtn>Subscribe</SubscribeBtn>
          <LoginBtn>Already a subscriber?</LoginBtn>
        </SubscribeGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    align-items: center;
    justify-content: revert;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

const SubscribeGroup = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    justify-self: end;
    display: revert;

    position: relative;
  }
`;

const SubscribeBtn = styled(Button)`
  background: var(--color-primary);
  color: var(--color-white);
  font-family: var(--font-family-sans-serif);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  padding: 11px 24px;
  border-radius: 4px;
`;

const LoginBtn = styled.button`
  text-decoration: underline;
  font-style: italic;
  font-size: calc(14rem / 16);

  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 8px;
`;

export default Header;
