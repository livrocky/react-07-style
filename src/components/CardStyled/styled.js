import styled from 'styled-components';

export const Card = styled.div`
  max-width: 50%;
  margin-left: 20px;
  & .subtitle & {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    min-width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  object-position: top;
`;

export const CardInfo = styled.div`
  background-color: #fff;
`;

export const Title = styled.h3`
  font-weight: normal;
  font-size: 25px;
  margin-top: 0;
  background-color: ${(props) => (props.dark ? '#333' : 'transparent')};
  color: ${(props) => (props.dark ? 'white' : '#333')};
`;

export const MyDate = styled.p`
  color: gray;
  &:hover {
    background-color: #efefef;
  }
`;

export const Text = styled.p`
  line-height: 1.3;
  color: ${(props) => (props.color ? props.color : '#333')};
  & span {
    text-transform: uppercase;
    letter-spacing: 5px;
  }
`;

export const Btn = styled.button`
  background-color: #333;
  color: snow;
  border: none;
  padding: 0.5em 1em;
`;

export const ActiveBtn = styled(Btn)`
  background-color: coral;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: block;
`;
