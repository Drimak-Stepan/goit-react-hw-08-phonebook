import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Username = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const Btn = styled.button`
  padding: 2px 4px 0;
  border-radius: 32px;
  border: 1px solid #9cb0b3;
  outline-color: #9cb0b3;
  cursor: pointer;
  color: black;
  background-color: white;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: #9cb0b3;
    color: white;
  }
`;
