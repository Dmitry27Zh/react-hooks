import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render!");
    });
    console.log("rerere");
    return <button className="btn btn-primary" onClick={onLogOut}>Log out</button>;
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

const areEqual = (prevProps, nextProps) => {
    if (prevProps.onLogOut === nextProps.onLogOut) {
        return true;
    } else {
        return false;
    }
};

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [someState, setSomeState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
        console.log("log out");
    }, []);

    return <>
        <button className="btn btn-primary" onClick={() => setSomeState(!someState)}>Initiate re-render</button>
        <MemoizedLogOutButton onLogOut={handleLogOut}/>
    </>;
};

export default MemoWithUseCallbackExample;
