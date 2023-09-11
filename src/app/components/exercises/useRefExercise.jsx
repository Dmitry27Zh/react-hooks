import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";

const UseRefExercise = () => {
    const blockRef = useRef();
    const handleClick = () => {
        blockRef.current.firstElementChild.textContent = "text";
        blockRef.current.style.width = "150px";
        blockRef.current.style.height = "80px";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <Divider />
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                ref={blockRef}
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >

                <small>Блок</small>
            </div>
            <button className="btn btn-primary" onClick={handleClick}>Change</button>

        </CollapseWrapper>
    );
};

export default UseRefExercise;
