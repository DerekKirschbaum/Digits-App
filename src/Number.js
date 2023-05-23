import React from "react"

export default function Number(props) {
    const styles = {
        backgroundColor: props.isSelected ? "white" : "greenyellow"
    }
    return (
        <div /*className="number-div"*/>
            <button className="number-button" onClick={props.selectNum} style={styles}>
                <h3>{props.value}</h3>
            </button>
            
        </div>
    )
}