import React from "react"

export default function Operation(props) {
    const styles = {
        backgroundColor: props.isSelected ? "white" : "greenyellow"
    }
    return (
        <div /*className="number-div"*/>
            <button className="operation-button" onClick={props.selectOp} style={styles}>
                <h3>{props.type}</h3>
            </button>
            
        </div>
    )
}