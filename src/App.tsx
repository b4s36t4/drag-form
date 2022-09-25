import "./App.css";
import SidePanel from "./container/SidePanel";
import ControlPanel from "./container/ControlPanel";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { useComponentContext } from "./context/componentContext";
import PropertyPanel from "./container/PropertyPanel";

function App() {
  const { onDragEnd } = useComponentContext();
  return (
    <div className="w-screen h-screen flex">
      <DndContext onDragEnd={onDragEnd}>
        <SidePanel components={["Button", "Input", "Radio"]} />
        <ControlPanel />
        <PropertyPanel />
      </DndContext>
      {/* <ControlPanel />
      <PropertyPanel /> */}
    </div>
  );
}

export default App;
