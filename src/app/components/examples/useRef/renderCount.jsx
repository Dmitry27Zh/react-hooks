import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const someRef = useRef("string");
    const [renderCount, setRenderCount] = useState(0);
    useEffect(() => {
        setRenderCount((prevState) => prevState + 1);
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            {someRef.current}
            <p>RenderCount: {renderCount}</p>
        </CardWrapper>
    );
};

export default RenderCountExample;
