// Using TypeScript interface to ensure the prop types 
// Because this is exported I can re-use this in the BaseComponent as well
export interface BaseComponentTypes {
    divHeight: string | undefined;
    onChangeDivHeight: (height: string) => void;
}

// The HOC that ingests a component & returns a new component.
function withFunc(Component: any) {
    return function({ divHeight, onChangeDivHeight } : BaseComponentTypes) {
        return <Component divHeight={divHeight} onChangeDivHeight={onChangeDivHeight}></Component>;
    };
}

export default withFunc;