import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const PrevStateExample = () => {
    const [someState, setSomeState] = useState("false");
    const previousState = useRef("");
    const toggleSomeState = () => {
        setSomeState((prevState) => prevState === "false" ? "true" : "false");
    };
    useEffect(() => {
        previousState.current = someState;
    }, [someState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>Some state: {someState}</p>
            <p>Previous state: {previousState.current}</p>
            <button className="btn btn-primary" type="button" onClick={toggleSomeState}>Toggle some state</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
