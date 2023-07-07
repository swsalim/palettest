"use client";

import ColorDisplay from "./ColorDisplay";
import ColorPicker from "./ColorPicker";
import { useState } from "react";

export default function ColorViewer() {
  const defaultColors = ["#aabbcc", "#ff0000", "#00ff00", "#0000ff", "#ff00ff"];
  const [colors, setColors] = useState<string[]>(defaultColors);

  const handleColorChange = (index: number, newColor: string): void => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };

  return (
    <div>
      <ColorDisplay colors={colors} handleColorChange={handleColorChange} />
    </div>
  );
}
