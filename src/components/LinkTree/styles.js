import styled from 'styled-components';
import variables from '../../variables';

export const Container = styled.div`
  margin: 30px auto;
  max-width: 320px;
  width: 80%;
  background: transparent;
  color: white;
  opacity: ${props => props.imgOpacity};
`;

