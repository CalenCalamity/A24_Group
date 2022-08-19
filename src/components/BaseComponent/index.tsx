import { useEffect, useState } from 'react';
import {
    StyledDiv,
    StyledSpan,
    StyledInput
} from './baseComponent.style';
import withFunc, { BaseComponentTypes } from '../../utils/withFunc';

// Created the div component as requested by step 1 via styled components to keep things clean
const BaseComponent = ({ divHeight, onChangeDivHeight } : BaseComponentTypes) => {

    const [compDivHeight, setCompDivHeight] = useState(divHeight);
    const hasWindow = typeof window !== 'undefined';
    const getHeight = () => hasWindow ? window.innerHeight : null
    const [windowHeight, setWindowHeight] = useState(getHeight());
    const handleResize = () => setWindowHeight(getHeight());

    // Making use of the useEffect hook to ensure that the span tag is updated when the window resizes
    useEffect(() => {
    if (hasWindow) {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }
    }, [hasWindow]);

    // Making use of useEffect to update the div height when divHeight prop undergoes a change.
    useEffect(() => setCompDivHeight(divHeight), [divHeight]);
    
    return (
    <>
        <StyledDiv height={compDivHeight}> 
            <StyledSpan>
                {windowHeight}
            </StyledSpan>
            <StyledInput
                placeholder="Numbers only"
                value={compDivHeight}
                onChange={(e) => onChangeDivHeight(e.target.value)}
                pattern="[0-9]*" // Ensuring a error is shown when a non-numeric value is entered
            />
        </StyledDiv>
    </>
    );
}

// Making use of the HOC 
export default withFunc(BaseComponent);
