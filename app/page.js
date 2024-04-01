'use client'
import DisplayModels from "@/components/DisplayModels";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [allModels, setAllModels] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredModels, setFilteredModels] = useState([]);
  useEffect(() => {


    fetch("http://localhost:5000/api/models")
      .then((res) => res.json())
      .then((data) => {
        setAllModels(data);
        setFilteredModels(data);
      });
  }, []);

  const handleSearch = (e) => {
    let query = e.target.value;

    setSearchQuery(query);
    query = query.trim();
    const filtered = allModels.filter((model) =>
      model.name.toLowerCase().includes(query.toLowerCase()) || model.category.toLowerCase().includes(query.toLowerCase()) || model.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredModels(filtered);
  };
  return (
    <div>
      <Navbar />

      <h2 className="mx-8 my-8 text-2xl font-bold mb-4">All Models</h2>

      <input
        type="text"
        placeholder="Search models..."
        className="mx-8 my-8 border border-gray-300 rounded-md px-4 py-2"
        value={searchQuery}
        onChange={handleSearch}
      />
      <DisplayModels models={filteredModels} />
    </div>
  );
}
