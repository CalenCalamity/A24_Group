import styled from 'styled-components';
import { Input } from 'antd';

// Leveraging the benefits of `styled-component` here to check if the `height` attribute has a value and if it does not, it defaults the height to `auto`
export const StyledDiv = styled.div.attrs((props: { height: string }) => props)`
    border: solid black 1px;
    height: ${props => props.height ? `${props.height}px` : 'auto'};
`;

export const StyledSpan = styled.span``;

export const StyledInput = styled(Input)``;
