"use client";

import { ChangeEvent } from "react";
import { HexColorPicker } from "react-colorful";

interface ColorPickerProps {
  color: string;
  onChange: (index: number, color: string) => void;
  index: number;
}

export default function ColorPicker({
  color,
  onChange,
  index,
}: ColorPickerProps) {
  return (
    <div>
      <HexColorPicker
        color={color}
        onChange={(color) => onChange(index, color)}
      />
    </div>
  );
}
