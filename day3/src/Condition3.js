import React from 'react';

const Myevent = () => {
    return <h1>Go and Sleep</h1>;
};
const Failevent = () => {
    return <h2>Do the Work</h2>;
};
function Condition3(props) {
    const target = props.name;
    return (
        <>
            {target && <Myevent />}
            {!target && <Failevent />}
        </>
    );
}

export default Condition3;
