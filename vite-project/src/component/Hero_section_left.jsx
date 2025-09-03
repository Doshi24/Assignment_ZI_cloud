import React from "react";
import { Mic, RotateCcw, Copy, Sparkle, Search } from "lucide-react";

 function Here_section_left() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white-50 p-6">
      
      <div className="w-full max-w-2xl bg-white p-6">
       
        <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkle className="text-yellow-500" />
            <h1 className="text-2xl font-semibold">Oslo chat</h1>
        </div>

        <div className="w-full max-w-lg space-y-6">
          <div className="bg-gray-50 rounded-2xl p-4 shadow-sm">
            <p className="text-gray-800">
              Hello I'm Oslo. Tell me what's on your mind
            </p>
          </div>

          <div className="flex gap-3 text-gray-400 ml-2">
            <button className="hover:text-gray-600">
              <Copy size={16} />
            </button>
            <button className="hover:text-gray-600">
              <RotateCcw size={16} />
            </button>
          </div>

          <div className="flex justify-end">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium px-4 py-2 rounded-xl transition">
              Create leads on Tech targets
            </button>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 shadow-sm">
            <p className="text-gray-800">
              ICP updated to target Tech Companies. If you want to specify
              roles, locations, or other criteria for decision-makers, please
              let me know
            </p>
          </div>

          <div className="flex gap-3 text-gray-400 ml-2">
            <button className="hover:text-gray-600">
              <Copy size={16} />
            </button>
            <button className="hover:text-gray-600">
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        <div className="w-full max-w-lg mt-25 flex items-center bg-gray-50 rounded-2xl px-4 py-2 shadow-sm border border-gray-300">
          <Search size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
          <button className="p-2 text-indigo-600 hover:text-indigo-800 transition">
            <Mic size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}


export default Here_section_left