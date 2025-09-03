import Here_section_right from "./Hero_section_right";
import Hero_section_left from "./Hero_section_left";

function Heropage() {
  return (
    <div className="flex w-full h-full">
      <div className="w-3/5 p-4 border border-gray-300 rounded-xl">
        <Hero_section_left />
      </div>

      <div className="w-2/5 p-4 border border-gray-300 rounded-xl">
        <Here_section_right />
      </div>
    </div>
  );
}

export default Heropage;
