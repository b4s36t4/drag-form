import { useDraggable } from "@dnd-kit/core";
import cuid from "cuid";
import { useComponentContext } from "../../context/componentContext";
import { COMPONENT } from "../../types";
interface SidePanelProps {
  components: string[];
}

const Component = ({ title }: { title: string }) => {
  const { setNodeRef, transform, listeners, attributes } = useDraggable({
    id: `${COMPONENT}-${title}`, // COMPONENT-Button for button
    data: { type: title, id: cuid(), properties: {} },
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      {...listeners} // {"onClick": () => void, onDrag: (e) => void}
      {...attributes}
      style={style}
      className="component px-4 py-2 text-center text-white font-bold text-lg bg-blue-400 mx-6 mb-5"
    >
      {title}
    </div>
  );
};

const SidePanel = ({ components }: SidePanelProps) => {
  const { components: draggedItems } = useComponentContext();
  return (
    <div className="w-3/12 bg-zinc-200">
      <div className="my-10">
        <p className="text-center px-2 mt-20 text-xl font-bold">
          Drag and Drop the component to Control Panel to add to the form
        </p>
      </div>
      <div className="" id="componets">
        {components.map((component: string) => (
          <Component key={component} title={component} />
        ))}
      </div>
      <div className="text-center">
        <a
          className="text-blue-500 underline text-lg"
          style={{ margin: 10 }}
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(draggedItems)
          )}`}
          download="data.json"
        >
          Download JSON
        </a>
      </div>
    </div>
  );
};
export default SidePanel;
