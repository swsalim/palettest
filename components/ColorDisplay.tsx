import ColorPicker from "./ColorPicker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { useState } from "react";

interface ColorDisplayProps {
  colors: string[];
  handleColorChange: (index: number, newColor: string) => void;
}

export default function ColorDisplay({
  colors,
  handleColorChange,
}: ColorDisplayProps) {
  const [openColorIndex, setOpenColorIndex] = useState<number | null>(null);
  return (
    <div>
      <h2>Selected Colors:</h2>
      <Dialog>
        <DialogTrigger>
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setOpenColorIndex(index)}
              style={{ backgroundColor: color, padding: "10px" }}
            >
              Color {index + 1}: {color}
            </button>
          ))}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[250px]">
          {openColorIndex !== null && (
            <ColorPicker
              color={colors[openColorIndex]}
              index={openColorIndex}
              onChange={handleColorChange}
            ></ColorPicker>
          )}
        </DialogContent>
      </Dialog>

      {/* <Dialog.Root
        open={openColorIndex !== null}
        onOpenChange={() => setOpenColorIndex(null)}
      >
        <Dialog.Overlay></Dialog.Overlay>
        <Dialog.Content>
          {openColorIndex !== null && (
            <ColorPicker
              color={colors[openColorIndex]}
              index={openColorIndex}
              onChange={handleColorChange}
            ></ColorPicker>
          )}
        </Dialog.Content>
      </Dialog.Root> */}
    </div>
  );
}
