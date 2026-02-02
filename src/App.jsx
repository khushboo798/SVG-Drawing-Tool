import { useState } from "react";

export default function App() {
  const [circles, setCircles] = useState([]);
  const [color, setColor] = useState("#2563eb");

  // Draw circle on click
  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCircles([...circles, { x, y, color }]);
  };

  // Undo last circle
  const handleUndo = () => {
    setCircles(circles.slice(0, -1));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-5xl">

        {/* Controls */}
        <div className="flex gap-4 mb-6">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-12 h-12 rounded cursor-pointer border"
          />

          <button
            onClick={handleUndo}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Undo
          </button>
        </div>

        {/* SVG Canvas */}
        <svg
          onClick={handleClick}
          className="w-full h-[60vh] border-2 border-dashed border-gray-300 rounded-lg cursor-crosshair"
        >
          {circles.map((circle, index) => (
            <circle
              key={index}
              cx={circle.x}
              cy={circle.y}
              r="8"
              fill={circle.color}
            />
          ))}
        </svg>

        {/* Counter */}
        <p className="text-center mt-6 text-lg font-semibold">
          Circles drawn: {circles.length}
        </p>
      </div>
    </div>
  );
}
