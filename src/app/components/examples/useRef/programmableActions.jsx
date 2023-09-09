import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
       inputRef.current.focus();
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-control" ref={inputRef} type="email" name="email" id="email" />
            <button className="btn btn-primary" type="button" onClick={handleClick}>Focus input</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
