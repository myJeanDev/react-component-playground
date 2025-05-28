import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
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
        <div className="card p-4 m-3 shadow w-25">
            <i className="bi bi-mouse text-success" style={{ fontSize: '3rem' }}></i>
            {/*
                d-flex==display:flex;
                flex-column==flex direction:column;
                flex-md-row==when screen medium->flex direction:row;
                fs-6==font-size:6;
            */}
            <div className="d-flex flex-column flex-md-row gap-2 font-monospace justify-content-center">
                <p className="badge bg-danger fs-6">{mousePosition.x}</p>
                <p className="badge bg-primary fs-6">{mousePosition.y}</p>
            </div>
        </div>
    );
}

export default MouseTracker;