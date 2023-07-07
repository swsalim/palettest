import ColorViewer from "@/components/ColorViewer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col place-content-center items-center  p-24">
      <div>
        <ColorViewer />
      </div>
    </main>
  );
}
