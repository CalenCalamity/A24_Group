import { useEffect, useRef, useState } from 'react';
import {
    StyledDiv,
    StyledSpan,
    StyledInput
} from './baseComponent.style';

const BaseComponent = () => {

    const [divHeight, setDivHeight] = useState<string>();
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

    return (
    <>
        <StyledDiv
            height={divHeight}
            background={'purple'}
        >
            <StyledSpan>
                {windowHeight}
            </StyledSpan>
            <StyledInput
                placeholder="Numbers only"
                value={divHeight}
                onChange={(e) => setDivHeight(e.target.value.toString())}
                pattern="[0-9]*"
            />
        </StyledDiv>
    </>
    );
}

export default BaseComponent;
