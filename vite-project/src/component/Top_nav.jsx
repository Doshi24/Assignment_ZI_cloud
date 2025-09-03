import { Pencil, ChevronLeft } from "lucide-react";

 function Top_nav() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-3 w-full border border-gray-300 rounded-lg m-1">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        <button className="p-2 hover:bg-gray-100 rounded-lg border  border-gray-300">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center space-x-2 border  border-gray-300 px-3 py-1 rounded-lg">
          <span className="text-lg font-medium ">Untitled List</span>
          <Pencil className="w-4 h-4 text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Steps */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-8 text-sm font-medium">
            <span className="flex flex-col items-center">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 w-28 rounded-full mb-1"></span>
            <span className="text-yellow-500">Who</span>
            </span>
            <span className="flex flex-col items-center ">
            <span className="bg-gray-300 h-2 w-28 rounded-full mb-1 hover:bg-gradient-to-r from-yellow-400 to-yellow-500"></span>
            <span className="text-gray-500 hover:text-yellow-500">What/Why</span>
            </span>
            <span className="flex flex-col items-center">
            <span className="bg-gray-300 h-2 w-28 rounded-full mb-1 hover:bg-gradient-to-r from-yellow-400 to-yellow-500"></span>
            <span className="text-gray-500 hover:text-yellow-500">Where</span>
            </span>
            <span className="flex flex-col items-center">
            <span className="bg-gray-300 h-2 w-28 rounded-full mb-1 hover:bg-gradient-to-r from-yellow-400 to-yellow-500"></span>
            <span className="text-gray-500 hover:text-yellow-500">When</span>
            </span>
        </div>
     </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button className="text-sm font-medium text-gray-600">Save</button>
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-medium px-2 py-2 rounded-lg shadow">
          Make Campaign
        </button>
      </div>
    </nav>
  );
}



export default Top_nav