import React, { useState } from 'react'
import './board.css'

// Stores pastel colors in an array to be randomized in the display
const pastelColors = ['#e7c6ff', '#c8b6ff', '#fcabd8', '#b8c0ff', '#aed0ff', '#9bb1ff'];

const Tasks = props => {
    const [colorIndex, setColorIndex] = useState(Math.floor(Math.random() * pastelColors.length));

    return (
        <div className='children' style={{ backgroundColor: pastelColors[colorIndex] }}>
            {props.children}
        </div>
    )
}

export default Tasks