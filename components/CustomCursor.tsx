"use client";

import { useState, useEffect } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setHidden(false);
        };

        const handleMouseDown = () => setClicked(true);
        const handleMouseUp = () => setClicked(false);

        const handleLinkHoverIn = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === 'A' ||
                (e.target as HTMLElement).tagName === 'BUTTON' ||
                (e.target as HTMLElement).closest('a') ||
                (e.target as HTMLElement).closest('button')) {
                setLinkHovered(true);
            }
        };

        const handleLinkHoverOut = () => {
            setLinkHovered(false);
        };

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleLinkHoverIn);
        window.addEventListener("mouseout", handleLinkHoverOut);

        // Hide cursor when it leaves the window
        document.body.addEventListener("mouseleave", () => setHidden(true));
        document.body.addEventListener("mouseenter", () => setHidden(false));

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleLinkHoverIn);
            window.removeEventListener("mouseout", handleLinkHoverOut);
            document.body.removeEventListener("mouseleave", () => setHidden(true));
            document.body.removeEventListener("mouseenter", () => setHidden(false));
        };
    }, []);

    // Add cursor-none class to body to hide the default cursor
    useEffect(() => {
        document.body.classList.add("cursor-none");

        return () => {
            document.body.classList.remove("cursor-none");
        };
    }, []);

    const cursorClasses = `
    fixed pointer-events-none z-50 flex items-center justify-center
    transition-transform duration-150 will-change-transform
    ${hidden ? 'opacity-0' : 'opacity-100'}
    ${clicked ? 'scale-90' : ''}
    ${linkHovered ? 'scale-150' : ''}
  `;

    // Choose a math symbol for the cursor
    const mathSymbol = linkHovered ? "∞" : "π";

    return (
        <>
            <div
                className={`${cursorClasses} w-8 h-8 text-blue-500 font-bold text-lg`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            >
                {mathSymbol}
            </div>
            <div
                className={`${cursorClasses} w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mix-blend-difference`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </>
    );
} 