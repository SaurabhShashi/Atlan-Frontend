'use client'
import Navbar from '@/components/Navbar';
import React, { useState } from 'react'

const CreateModel = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [creator, setCreator] = useState('');
    const [featured, setFeatured] = useState(false);
    const [category, setCategory] = useState('');
    const [reasonForFeatured, setReasonForFeatured] = useState('');
    const [useCases, setUseCases] = useState([]);
    const [codeLanguage, setCodeLanguage] = useState('python');
    const [code, setCode] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            id,
            name,
            description,
            creator,
            featured,
            category,
            useCases,
            reasonForFeatured,
            codeExample: {
                language: codeLanguage,
                code
            }
        };
        console.log(formData);
        fetch('http://localhost:5000/api/create-model', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.success) {
                    alert('Model created successfully');
                    setId('');
                    setName('');
                    setDescription('');
                    setCreator('');
                    setFeatured(false);
                    setCategory('');
                    setReasonForFeatured('');
                    setUseCases([]);
                    setCodeLanguage('python');
                    setCode('');
                } else {
                    alert('Failed to create model');
                }
            })

    };
    return (
        <div>
            <Navbar />
            <div className="mx-auto">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    {/* Creator */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="creator">
                            Creator
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="creator"
                            type="text"
                            placeholder="Creator"
                            value={creator}
                            onChange={(e) => setCreator(e.target.value)}
                            required
                        />
                    </div>

                    {/* Category */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                            Category
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="category"
                            type="text"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </div>

                    {/* Use Cases */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="useCases">
                            Use Cases (separate with commas)
                        </label>
                        {/* You can implement dynamic addition/removal of use cases if needed */}
                        {/* For simplicity, just a text input for demonstration */}
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="useCases"
                            type="text"
                            placeholder="Use Cases"
                            // Assuming use cases are comma-separated strings
                            value={useCases.join(',')}
                            onChange={(e) => setUseCases(e.target.value.split(','))}
                            required
                        />
                    </div>
                    {/* Code Language */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="codeLanguage">
                            Code Language
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="codeLanguage"
                            value={codeLanguage}
                            onChange={(e) => setCodeLanguage(e.target.value)}
                            required
                        >
                            <option value="python">Python</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    {/* Code Example */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
                            Code Example
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="code"
                            placeholder="Code Example"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    {/* Submit Button */}
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Create Model
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateModel