import { useState } from "react";

const Space = (props) => {
    const { space, free } = props;
    const [cardColor, setCardColor] = useState("darkred");
    const boxStyle = free ?
        "btn btn-success border border-5 border-success rounded-5" :
        "btn btn-primary border border-2 border-primary ";

    const handleCheckSpace = (e) => {
        console.log("checked")
        setCardColor(cardColor === "darkred" ? "darkblue" : "darkred");
    }

    return (
        <div
            className={boxStyle}
            style={{
                backgroundColor: cardColor,
                height: "20%",
                width: "20%",
            }}
            onClick={(e) => handleCheckSpace(e)}>
            {space}
        </div>
    )
}

export default Space;