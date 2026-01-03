
import React, { useState, useMemo } from 'react';

const templates = [
  { id: 1, name: 'Modern Portfolio', category: 'Portfolio', imageUrl: 'https://placehold.co/600x400/0f172a/e2e8f0?text=Portfolio' },
  { id: 2, name: 'Clean Blog', category: 'Blog', imageUrl: 'https://placehold.co/600x400/1e293b/e2e8f0?text=Blog' },
  { id: 3, name: 'E-commerce Store', category: 'E-commerce', imageUrl: 'https://placehold.co/600x400/6366f1/ffffff?text=E-commerce' },
  { id: 4, name: 'Corporate Landing', category: 'Business', imageUrl: 'https://placehold.co/600x400/334155/e2e8f0?text=Business' },
  { id: 5, name: 'Creative Agency', category: 'Portfolio', imageUrl: 'https://placehold.co/600x400/0f172a/94a3b8?text=Agency' },
  { id: 6, name: 'SaaS Startup', category: 'Business', imageUrl: 'https://placehold.co/600x400/1e293b/ffffff?text=SaaS' },
  { id: 7, name: 'Food Recipe Blog', category: 'Blog', imageUrl: 'https://placehold.co/600x400/6366f1/e2e8f0?text=Food+Blog' },
  { id: 8, name: 'Digital Marketplace', category: 'E-commerce', imageUrl: 'https://placehold.co/600x400/334155/ffffff?text=Marketplace' },
];

const categories = ['All', 'Portfolio', 'Blog', 'E-commerce', 'Business'];

const DesignPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTemplates = useMemo(() => {
    if (activeCategory === 'All') {
      return templates;
    }
    return templates.filter(template => template.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      <div>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-secondary-light text-text-secondary hover:bg-secondary-light/70'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTemplates.map(template => (
          <div key={template.id} className="bg-secondary rounded-lg overflow-hidden border border-secondary-light/30 shadow-lg group transform transition-transform duration-300 hover:scale-105 hover:shadow-primary/20">
            <div className="relative">
              <img src={template.imageUrl} alt={template.name} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                 <button className="px-4 py-2 text-sm font-semibold bg-white/20 text-white rounded-md backdrop-blur-sm hover:bg-white/30 transition-colors">
                    Preview
                 </button>
                 <button className="px-4 py-2 text-sm font-semibold bg-primary text-white rounded-md hover:bg-primary-hover transition-colors">
                    Select
                 </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-text-main">{template.name}</h3>
              <p className="text-sm text-text-secondary">{template.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignPage;
