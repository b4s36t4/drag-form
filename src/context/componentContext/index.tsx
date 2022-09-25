import { DragEndEvent } from "@dnd-kit/core";
import React, { createContext, useContext, useState } from "react";

interface Context {
  components: Component[];
  onDragEnd: (event: DragEndEvent) => void;
  selectedComponent?: Component;
  setSelectedComponent: (selected: Component) => void;
  deleteComponent: () => void;
  updateProperties: (id: string, field: string, value: string) => void;
}

const Context = createContext<Context | null>(null);

interface ProviderProps {
  children: React.ReactNode;
}

export const ComponentProvider = ({ children }: ProviderProps) => {
  const [components, setComponents] = useState<Component[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<
    Component | undefined
  >();

  const onDragEnd = (event: DragEndEvent) => {
    if (event.active.data.current) {
      setComponents((prev: any) => [...prev, event.active?.data.current]);
    }
  };

  const deleteComponent = () => {
    const filterdComponents = components.filter(
      (_component) => _component.id !== selectedComponent?.id
    );
    setComponents(filterdComponents);
    setSelectedComponent(undefined);
  };

  const updateProperties = (id: string, field: string, value: string) => {
    const updatedComponents = [...components].map((component) => {
      if (component.id === id) {
        return {
          ...component,
          properties: {
            ...component.properties,
            [field]: value,
          },
        };
      }
      return component;
    });
    setComponents(updatedComponents);
  };

  const value = {
    components,
    selectedComponent,
    onDragEnd,
    setSelectedComponent,
    deleteComponent,
    updateProperties,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useComponentContext = () => {
  const conext = useContext(Context);
  if (!!conext) {
    return conext;
  } else {
    throw new Error("Context not supported");
  }
};
