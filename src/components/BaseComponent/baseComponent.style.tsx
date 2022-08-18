import styled from 'styled-components';
import { Input } from 'antd';

export const StyledDiv = styled.div.attrs((props: { height: string, background: string}) => props)`
    border: solid black 1px;
    height: ${props => props.height ? `${props.height}px` : 'auto'};
    background: ${props => props.background };
`;

export const StyledSpan = styled.span``;

export const StyledInput = styled(Input)``;