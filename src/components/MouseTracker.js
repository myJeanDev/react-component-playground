import { useState, useEffect } from 'react';

function MouseTracker({ onMouseMove }) {
    // Local state to store mouse coordinates
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // useEffect handles side effects (event listening) in the component
    useEffect(() => {
        // 1. Event handler function - runs when mouse moves
        const handleMouseMove = (e) => {
            // Capture new coordinates from mouse event
            const newPosition = { x: e.clientX, y: e.clientY };

            // 2. Update component's local state
            setMousePosition(newPosition);

            // 3. If parent provided a callback prop, send coordinates upwards
            if (onMouseMove) {
                onMouseMove(newPosition);
            }
        };

        // 4. Subscribe to mouse movement events when component mounts
        window.addEventListener('mousemove', handleMouseMove);

        // 5. Cleanup function - runs when component unmounts or before re-running effect
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [onMouseMove]); // 6. Dependency array - effect re-runs if onMouseMove changes

    return (
        <div>
            <p>X: {mousePosition.x}</p>
            <p>Y: {mousePosition.y}</p>
        </div>
    );
}

export default MouseTracker;