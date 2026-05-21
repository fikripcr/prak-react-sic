import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
      <div className="p-6 sm:p-8 bg-gray-50 min-h-screen">
      {frameworkData.map((item) => (
      <div key={item.id} className="bg-white border rounded-xl shadow-sm hover:shadow-md hover:-translate-7 transition-all duration-1000 mb-6 p-6">
            
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h2>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
            
            {/* Icon */}
            <div className="ml-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            </div>
            </div>

            {/* Developer Info */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg p-3 mb-4">
            <span className="font-semibold text-gray-800">{item.details.developer}</span>
            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-sm font-bold rounded-full">
            {item.details.releaseYear}
            </span>
            </div>

            {/* Website Button */}
            <a 
            href={item.details.officialWebsite} 
            target="_blank" 
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 mb-4"
            >
            🌐 Visit Website
            </a>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
            <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
                  {tag}
            </span>
            ))}
            </div>
      </div>
      ))}
      </div>
    )
}