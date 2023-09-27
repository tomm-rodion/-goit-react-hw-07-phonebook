import styled from '@emotion/styled';
import { font, titleColor } from './Style/mixins';

export const Wrapper = styled.div`
  padding: 25px;
  margin: 20px auto;
  min-width: 340px;
  max-width: fit-content;
  border-radius: 8px;
  background-color: #e5e5e5;
`;

export const Container = styled.div`
  width: auto;
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: #d4d7df;
  &:first-of-type {
    margin-bottom: 15px;
  }
`;

export const TitlePhoneBook = styled.h1`
  text-align: center;
  margin: 0;
  ${font({ fs: 60, fw: 700 })}
  ${titleColor()};
  margin-bottom: 20px;
`;

export const TitleContacts = styled.h2`
  text-align: center;
  margin: 20px auto;
  ${font({ fs: 30, fw: 600, lh: 30 })}
  ${titleColor()};
  margin-bottom: 20px;
`;
