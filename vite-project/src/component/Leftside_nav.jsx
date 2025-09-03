import { Home, Rocket, Sparkle, Users, ChartPie,Mail, Settings, LogOut, NotebookPen } from "lucide-react";

function Leftside_nav() {
  const TopIcons = [Home, Rocket, NotebookPen,ChartPie, Users, Mail];
  const bottomIcons = [Settings, LogOut];
  const activeIndex = 0; 
  return (
    <aside className="w-20 bg-white flex flex-col items-center py-6 space-y-8 shadow-2xl  mr-3">
      {/* Top Star */}
      <button className="text-yellow-400 hover:scale-110 transition-transform">
        <Sparkle size={18} />
      </button>

      {/* Profile */}
      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200">
        <img src="/monil.jpg" alt="User" className="w-full h-full object-cover" />
      </div>

      {/* Icons */}
      <nav className="flex flex-col gap-4 text-gray-500 mt-2">
        {TopIcons.map((Icon, i) => (
          <button
            key={i}
            className={`p-3 rounded-full transition-colors ${
              activeIndex === i
                ? "bg-yellow-100 text-yellow-500 "
                : "text-gray-500 hover:bg-yellow-100 hover:text-yellow-500"
            }`}
          >
            <Icon size={16} />
          </button>
        ))}
      </nav>
        
      <nav className="flex flex-col gap-6 text-gray-500 mt-6">
        {bottomIcons.map((Icon, i) => (
          <button
            key={i}
            className={`p-3 rounded-full transition-colors ${
              activeIndex === i
                ? "text-gray-500"
                : "text-gray-500 hover:bg-yellow-100 hover:text-yellow-500"
            }`}
          >
            <Icon size={16} />
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Leftside_nav;
