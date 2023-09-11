import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const UseCallBackExample = () => {
    const [data, setData] = useState({ email: "" });
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setData((prevState) => ({ ...prevState, [name]: value }));
    };
    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);

    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [withCallback]);

    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider />
            <p>Render without callback count: {withoutCallback.current}</p>
            <p>Render with callback count: {withCallback.current}</p>
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-control" type="email" name="email" id="email" value={data.email} onChange={handleChange}/>
        </CardWrapper>
    );
};

export default UseCallBackExample;
