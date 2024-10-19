import React, { useState } from 'react';
import { Globe, Compass, Zap } from 'lucide-react';

interface ARViewProps {
  mode: 'ar' | 'camera' | 'media' | 'solid';
}

const ARView: React.FC<ARViewProps> = ({ mode }) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const hotspots = [
    { id: 'web', icon: Globe, title: 'Web Portal', description: 'Access the entire web in AR' },
    { id: 'navigation', icon: Compass, title: 'AR Navigation', description: 'Find your way in augmented reality' },
    { id: 'features', icon: Zap, title: 'AR Features', description: 'Discover amazing AR capabilities' },
  ];

  const renderBackground = () => {
    switch (mode) {
      case 'camera':
        return (
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl">
              Camera Mode (Simulated)
            </div>
          </div>
        );
      case 'media':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500">
            <div className="absolute inset-0 flex items-center justify-center text-white text-2xl">
              Media Player Mode (Simulated)
            </div>
          </div>
        );
      case 'solid':
        return <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />;
      default:
        return <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-800 opacity-50" />;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {renderBackground()}
      {mode === 'ar' && (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold holographic-text animate-pulse-slow">
              Gemini Browser
            </div>
          </div>
          <div className="absolute top-20 left-4 glassmorphism rounded-lg p-4 shadow-lg">
            <div className="text-xl font-semibold mb-2 holographic-text">Welcome to the Future</div>
            <p className="text-sm">Experience the web in augmented reality</p>
          </div>
          <div className="absolute bottom-20 right-4 glassmorphism rounded-lg p-4 shadow-lg">
            <div className="text-lg font-semibold mb-2 holographic-text">Holographic UI</div>
            <p className="text-sm">Interact with floating elements</p>
          </div>
          {hotspots.map((hotspot, index) => (
            <div
              key={hotspot.id}
              className={`absolute glassmorphism rounded-full p-3 cursor-pointer transition-all duration-300 ${
                activeHotspot === hotspot.id ? 'scale-125' : 'scale-100'
              }`}
              style={{
                top: `${25 + index * 25}%`,
                left: `${20 + index * 30}%`,
              }}
              onMouseEnter={() => setActiveHotspot(hotspot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              <hotspot.icon className="w-6 h-6" />
              {activeHotspot === hotspot.id && (
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 glassmorphism rounded-lg p-3 w-48">
                  <h3 className="text-lg font-semibold holographic-text">{hotspot.title}</h3>
                  <p className="text-sm mt-1">{hotspot.description}</p>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ARView;