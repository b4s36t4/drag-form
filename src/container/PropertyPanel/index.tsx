import Properties from "../../components/Properties";
import { useComponentContext } from "../../context/componentContext";
import { renderProptiyFields } from "../../utils/renderFields";

const PropertyPanel = () => {
  const { selectedComponent } = useComponentContext();
  return (
    <section className="bg-gray-500 w-3/12 flex overflow-scroll">
      {selectedComponent ? (
        <Properties
          component={selectedComponent}
          fields={renderProptiyFields(selectedComponent)}
        />
      ) : (
        <p className="my-auto text-center font-bold text-lg mx-10 text-white">
          Select any component to edit it's Properties
        </p>
      )}
    </section>
  );
};

export default PropertyPanel;
