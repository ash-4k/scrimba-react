import React from "react"

export default function WindowTracker() {
    /**
     * Challenge:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        // 1. This runs ONCE after first render (because of empty [])
        // 2. Adds resize listener to GLOBAL window object (not component)

        window.addEventListener("resize", function () {
            // 3. Browser calls this EVERY resize (lives on window forever)
            // 4. setWindowWidth triggers re-render with new width
            setWindowWidth(window.innerWidth)
        })
    }, [])


    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
