import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const factorial = (n) => n ? n * factorial(n - 1) : 1;

const runFactorial = (n) => {
    console.log("Run factorial!");
    return factorial(n);
};

const ComplexCalculateExample = () => {
    const [otherState, setOtherState] = useState(false);
    const [value, setValue] = useState(100);
    const color = useMemo(() => ({ value: otherState ? "primary" : "secondary" }), [otherState]);
    useEffect(() => {
        console.log("render button color");
    }, [color]);
    const fact = useMemo(() => runFactorial(value), [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />
                <p>Value: {value}</p>
                <p>Fact: {fact}</p>
                <button className="btn btn-primary" type="button" onClick={() => setValue((prevState) => prevState + 1)}>Increment</button>
                <button className="btn btn-primary" type="button" onClick={() => setValue((prevState) => prevState - 1)}>Decrement</button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <Divider />
                <button className={`btn btn-${color.value}`} type="button" onClick={() => setOtherState((prevState) => !prevState)}>Change color</button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
