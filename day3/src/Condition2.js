import React from 'react';

const Myevent = () => {
    return <h1>Completed the work</h1>;
};

const Failevent = () => {
    return <h2>complete the entire process</h2>;
};

function Condition2(props) {
    const target = props.name;
    return target ? <Myevent /> : <Failevent />;
}
export default Condition2;
