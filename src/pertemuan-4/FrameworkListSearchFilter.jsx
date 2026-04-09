import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /** Deklrasai state **/
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");

  /*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};

  /** Deklrasai Logic Search & Filter **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm) ||
      framework.details.developer.toLowerCase().includes(_searchTerm) ||
      framework.details.releaseYear.toString().includes(_searchTerm);
    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /** Deklarasi pengambilan unique tags di frameworkData **/
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="col-span-2">
        <input
          type="text"
          name="searchTerm"
          placeholder="Search framework..."
          // Menambahkan 'self-start' di sini
          className="w-full p-2 border border-gray-300 rounded mb-4 self-start"
          onChange={handleChange}
        />

        <select
          name="selectedTag"
          // Menambahkan 'self-start' di sini
          className="w-full p-2 border border-gray-300 rounded mb-4 self-start"
          onChange={handleChange}
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {filteredFrameworks.map((item) => (
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
