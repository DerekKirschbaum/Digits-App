import React from "react"

export default function Number(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div className="number-div">
            <h1>1,2,3</h1>
        </div>
    )
}