export interface BaseComponentTypes {
    divHeight: string | undefined;
    onChangeDivHeight: (height: string) => void;
}

function withFunc(Component: any) {
    return function({ divHeight, onChangeDivHeight } : BaseComponentTypes) {
        return <Component divHeight={divHeight} onChangeDivHeight={onChangeDivHeight}></Component>;
    };
}

export default withFunc;