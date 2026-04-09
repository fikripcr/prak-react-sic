import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {frameworkData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
            {item.description}
          </p>
          <p className="text-xs font-medium text-gray-500 bg-gray-50 rounded-md px-3 py-1.5 w-fit mb-6">
            {item.details.developer} {item.details.releaseYear}
          </p>
          <a
            href={item.details.officialWebsite}
            target="_blank"
            className="mt-auto block w-full text-center px-4 py-2.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200"
          >
            Visit Website
          </a>
        </div>
      ))}
    </div>
  );
}
