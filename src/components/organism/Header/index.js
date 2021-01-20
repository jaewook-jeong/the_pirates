import React from 'react';
import Button from '../../atoms/button';
import { HeaderLayout, HomwButton, LoginBtn, MenuList, MenuLayout, ToppesLayout } from './style';

const Header = () => {
  return (
    <HeaderLayout>
      <ToppesLayout>
        <HomwButton />
        <LoginBtn>
          <Button type="link" size="small">로그인/가입</Button>
        </LoginBtn>
      </ToppesLayout>
      <MenuLayout>
        <MenuList>
          <Button type="link" size="small">홈</Button>
          <Button type="link" size="small">시장</Button>
          <Button type="link" size="small">쇼핑</Button>
          <Button type="link" size="small">콘텐츠</Button>
          <Button type="link" size="small">시세</Button>
          <Button type="link" size="small">도매</Button>
          <Button type="link" size="small">후기</Button>
          <Button type="link" size="small">문의</Button>
        </MenuList>
      </MenuLayout>
    </HeaderLayout>
  );
};

export default Header;
