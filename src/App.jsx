import { useState } from 'react'; // For toggling sidebar
import IMAGES from "./image/Image";
import { Bell, User, MessageSquare, Menu } from 'lucide-react'; // Icons
export default function App() {
  const imageKeys = Object.keys(IMAGES); // Get all image keys
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle state
    return (
       <div>
       
       <div className="min-h-screen bg-teal-600 flex flex-col md:flex-row">
      {/* Sidebar for Desktop */}
      <aside className={`fixed md:static md:flex md:flex-col md:w-20 bg-teal-600 text-white items-center py-4 space-y-6 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="text-2xl font-bold">LOGO</div>
        <nav className="flex flex-col gap-4 mt-4">
          {['Home', 'Explore', 'Featured', 'Trending', 'New Arrivals', 'Exhibitions'].map((item) => (
            <button key={item} className="hover:bg-teal-700 p-2 rounded-md">
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content with White Background */}
      <main className="flex-1 bg-white p-4 md:p-6 mt-12 ml-4 mr-4 mb-12 rounded-t-3xl md:rounded-none shadow-xl relative">
        {/* Header for Mobile */}
        <header className="md:hidden flex justify-between items-center bg-teal-600 p-3 text-white rounded-lg mb-4">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2">
            <Menu className="w-6 h-6" /> {/* Hamburger Icon */}
          </button>

          <div className="text-xl font-bold">LOGO</div> {/* Centered Logo */}

          <div className="flex items-center space-x-3">
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <User className="w-5 h-5 text-teal-600" />
            </button>
            <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 relative">
              <Bell className="w-5 h-5 text-teal-600" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
          </div>
        </header>

        {/* Header for Desktop */}
        <header className="hidden md:flex justify-end items-center gap-4 mb-4 ">
          <button className="flex items-center bg-teal-500 text-white px-3 py-1 rounded-md hover:bg-teal-600">
            <MessageSquare className="w-4 h-4 mr-1" />
            Talk to Expert
          </button>
          <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
            <User className="w-5 h-5 text-teal-600" />
          </button>
          <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 relative">
            <Bell className="w-5 h-5 text-teal-600 " />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </button>
        </header>

        {/* Welcome Section */}
        <div className="text-gray-700 text-lg font-semibold mb-2">
          Welcome Back, <span className="font-bold text-black">User</span>
        </div>

        {/* Hero Section */}
        <section className="relative bg-[url('src/image/0.jpg')] bg-cover bg-center text-white p-4 md:p-6 rounded-xl mb-4">
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div> {/* Overlay */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Digital Art Gallery</h2>
            <p className="text-sm md:text-base">
              Step into a world where imagination knows no bounds. Our gallery showcases a diverse collection of
              contemporary and classical artworks. Each piece tells a story, evoking emotions and inspiring creativity.
            </p>
          </div>
        </section>

        {/* Art Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imageKeys.map((key, index) => (
            <div key={index} className="bg-gray-300 h-36 md:h-40 rounded-xl shadow-md">
              <img
                src={IMAGES[key]}
                alt={`Art ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t flex justify-around py-2 md:hidden">
        {['Home', 'Explore', 'Featured', 'Trending', 'New Arrivals'].map((item) => (
          <button key={item} className="flex flex-col items-center text-sm text-gray-600 hover:text-teal-500">
            <span>📍</span>  
            {item}
          </button>
        ))}
      </nav>
    </div>
          </div>
        
    );
}
