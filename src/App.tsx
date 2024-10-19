import React, { useState } from 'react';
import { Menu, Camera, Image, Layers } from 'lucide-react';
import FloatingMenu from './components/FloatingMenu';
import ARView from './components/ARView';
import GeminiLogo from './components/GeminiLogo';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [backgroundMode, setBackgroundMode] = useState<'ar' | 'camera' | 'media' | 'solid'>('ar');

  const toggleBackgroundMode = () => {
    const modes: ('ar' | 'camera' | 'media' | 'solid')[] = ['ar', 'camera', 'media', 'solid'];
    const currentIndex = modes.indexOf(backgroundMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setBackgroundMode(modes[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 text-white font-sans">
      <ARView mode={backgroundMode} />
      <div className="fixed top-4 left-4 z-50 flex items-center space-x-2">
        <GeminiLogo className="w-10 h-10" />
        <h1 className="text-2xl font-bold holographic-text">Gemini Browser</h1>
      </div>
      <button
        onClick={toggleBackgroundMode}
        className="fixed top-4 right-16 z-50 p-2 glassmorphism rounded-full shadow-lg"
      >
        {backgroundMode === 'ar' && <Layers className="w-6 h-6" />}
        {backgroundMode === 'camera' && <Camera className="w-6 h-6" />}
        {backgroundMode === 'media' && <Image className="w-6 h-6" />}
        {backgroundMode === 'solid' && <Layers className="w-6 h-6" />}
      </button>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 p-2 glassmorphism rounded-full shadow-lg"
      >
        <Menu className="w-6 h-6" />
      </button>
      <FloatingMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}

export default App;