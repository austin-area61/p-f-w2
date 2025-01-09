"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Austin Onyango - Portfolio</title>
        <meta
          name="description"
          content="This is a portfolio website showcasing my skills and experience."
        />
        <meta name="author" content="Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.className} min-h-screen bg-[#0a192f] text-gray-300`}
        style={{
          backgroundImage: "linear-gradient(to bottom, #0a192f, #112240)",
          backgroundAttachment: "fixed",
        }}
      >
        {children}
        <div
          className="hover-effect"
          style={
            {
              "--mouse-x": `${mousePosition.x}px`,
              "--mouse-y": `${mousePosition.y}px`,
            } as React.CSSProperties
          }
        />
      </body>
    </html>
  );
}
