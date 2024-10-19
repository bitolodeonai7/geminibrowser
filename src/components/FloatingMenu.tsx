import React, { useState } from 'react';
import { Search, Settings, User, Globe, X, Compass, Zap, Grid, ChevronDown } from 'lucide-react';
import GeminiLogo from './GeminiLogo';

interface FloatingMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('Browser');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'Browser':
        return (
          <div className="grid grid-cols-3 gap-4 mt-4">
            {['Home', 'Bookmarks', 'History', 'Downloads', 'Private', 'AR View'].map((item) => (
              <div key={item} className="glassmorphism rounded-lg p-3 text-center cursor-pointer hover:bg-white/20 transition-colors">
                <Globe className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        );
      case 'Apps':
        return (
          <div className="grid grid-cols-4 gap-4 mt-4">
            {['Maps', 'Camera', 'Gallery', 'Notes', 'Calendar', 'Weather', 'Clock', 'Calculator'].map((item) => (
              <div key={item} className="glassmorphism rounded-lg p-3 text-center cursor-pointer hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-pink-500 to-orange-400 rounded-lg" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        );
      case 'Features':
        return (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {['AR Navigation', 'Object Recognition', 'Virtual Workspace', 'AR Chat'].map((item) => (
              <div key={item} className="glassmorphism rounded-lg p-4 cursor-pointer hover:bg-white/20 transition-colors">
                <Zap className="w-6 h-6 mb-2" />
                <h3 className="text-lg font-semibold holographic-text">{item}</h3>
                <p className="text-sm mt-1">Experience the future of AR</p>
              </div>
            ))}
          </div>
        );
      case 'Profile':
        return (
          <div className="mt-4">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold holographic-text">John Doe</h3>
                <p className="text-sm">AR Enthusiast</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Edit Profile', 'Privacy', 'Notifications', 'Help & Support'].map((item) => (
                <div key={item} className="glassmorphism rounded-lg p-3 text-center cursor-pointer hover:bg-white/20 transition-colors">
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="glassmorphism rounded-t-3xl p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex items-center mb-6">
          <GeminiLogo className="w-10 h-10 mr-2" />
          <h2 className="text-2xl font-bold holographic-text">Gemini Browser</h2>
        </div>
        <form onSubmit={handleSearch} className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search or enter URL"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glassmorphism rounded-full py-2 px-4 pl-10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-white/60" />
          </div>
        </form>
        <div className="flex justify-around mb-6">
          {['Browser', 'Apps', 'Features', 'Profile'].map((item) => (
            <button
              key={item}
              className={`text-center ${activeSection === item ? 'text-cyan-400' : 'text-white/80'}`}
              onClick={() => setActiveSection(item)}
            >
              <div className="glassmorphism rounded-xl p-3 mb-2">
                {item === 'Browser' && <Globe className="w-6 h-6 mx-auto" />}
                {item === 'Apps' && <Grid className="w-6 h-6 mx-auto" />}
                {item === 'Features' && <Zap className="w-6 h-6 mx-auto" />}
                {item === 'Profile' && <User className="w-6 h-6 mx-auto" />}
              </div>
              <p className="text-sm font-medium">{item}</p>
            </button>
          ))}
        </div>
        {renderSectionContent()}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="glassmorphism rounded-full py-2 px-4 flex items-center space-x-2 hover:bg-white/30 transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
          <button
            onClick={onClose}
            className="glassmorphism rounded-full py-2 px-4 flex items-center space-x-2 hover:bg-white/30 transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
            <span>Close Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;