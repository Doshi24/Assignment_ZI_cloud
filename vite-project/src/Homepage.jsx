import Leftside_nav from './component/Leftside_nav'
import Top_nav from './component/Top_nav'
import Heropage from './component/Heropage'


function Homepage() {

    return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20">
        <Leftside_nav />
      </div>

      {/* Main Section */}
      <div className="flex-1 ml-20 flex flex-col">
        {/* Top Navbar */}
        <div className="sticky top-0 z-10">
          <Top_nav />
        </div>

        <div className='ml-4 flex-1 overflow-y-auto'>
            <Heropage />
        </div>
      </div>
    </div>
    )

}


export default Homepage