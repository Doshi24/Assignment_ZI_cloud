



function Here_section_right() {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 border border-gray-400 rounded-lg ">
      {/* Header */}
      <h2 className="text-2xl font-semibold">
        Let’s define your <span className="text-yellow-500">targets</span>
      </h2>
      <p className="text-gray-500 mt-1">
        Focus on the most relevant fields to shape your ICP — all fields are optional
      </p>

      {/* Company Profile */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Company Profile</h3>
        <div className="bg-white border  border-gray-400 rounded-lg p-6 space-y-5 shadow-sm max-h-64 overflow-y-auto">
          {/* Company Headcount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Headcount
            </label>
            <select className="w-full border  border-gray-400 rounded-md p-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
              <option>1-10...</option>
              <option>11-50</option>
              <option>51-200</option>
              <option>200+</option>
            </select>
          </div>

          {/* Company HQ Locations */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company HQ Locations
            </label>
            <select className="w-full border  border-gray-400 rounded-md p-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
              <option>India...</option>
              <option>USA</option>
              <option>UK</option>
              <option>Europe</option>
            </select>
          </div>

          {/* Revenue Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Revenue range
            </label>
            <select className="w-full border border-gray-400  rounded-md p-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
              <option>50L - 1Cr...</option>
              <option>1Cr - 10Cr</option>
              <option>10Cr+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Example
            </label>
            <select className="w-full border border-gray-400  rounded-md p-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
              <option>50L - 1Cr...</option>
              <option>1Cr - 10Cr</option>
              <option>10Cr+</option>
            </select>
          </div>
        </div>
      </div>

      

      {/* Prospect Profile */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Prospect Profile</h3>
        <div className="bg-white border border-gray-400 rounded-lg p-6 shadow-sm">
          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <select className="w-full border  border-gray-400 rounded-md p-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
              <option>Search department...</option>
              <option>Engineering</option>
              <option>Sales</option>
              <option>Marketing</option>
              <option>HR</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Example
            </label>
            <select className="w-full border  border-gray-400 rounded-md p-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
              <option>Search department...</option>
              <option>Engineering</option>
              <option>Sales</option>
              <option>Marketing</option>
              <option>HR</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Here_section_right