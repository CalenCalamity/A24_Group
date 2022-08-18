import { Component, useEffect, useRef, useState } from 'react';
import {
    StyledDiv,
    StyledSpan,
    StyledInput
} from './baseComponent.style';
import withFunc, { BaseComponentTypes } from '../HOC/withFunc';

const BaseComponent = ({ divHeight, onChangeDivHeight } : BaseComponentTypes) => {
    const [compDivHeight, setCompDivHeight] = useState(divHeight);
    const hasWindow = typeof window !== 'undefined';
    const getHeight = () => hasWindow ? window.innerHeight : null
    const [windowHeight, setWindowHeight] = useState(getHeight());
    const handleResize = () => setWindowHeight(getHeight());

    useEffect(() => {
    if (hasWindow) {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }
    }, [hasWindow]);

    useEffect(() => setCompDivHeight(divHeight), [divHeight]);
    
    return (
    <>
        <StyledDiv
            height={compDivHeight}
            background={'purple'}
        >
            <StyledSpan>
                {windowHeight}
            </StyledSpan>
            <StyledInput
                placeholder="Numbers only"
                value={compDivHeight}
                onChange={(e) => onChangeDivHeight(e.target.value)}
                pattern="[0-9]*"
            />
        </StyledDiv>
    </>
    );
}

export default withFunc(BaseComponent);
