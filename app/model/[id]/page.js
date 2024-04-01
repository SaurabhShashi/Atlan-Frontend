'use client'
import Loading from "@/components/Loading"
import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"

const Model = ({ params }) => {
    const [model, setModel] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        console.log(params.id)
        fetch(`http://localhost:5000/api/models/${params.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setModel(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div>
            <Navbar />
            <Loading />
        </div>
    }

    return (
        <div>
            <Navbar />
            {model && (
                <div className="max-w-4xl mx-4 lg:mx-auto mt-8">
                    <h1 className="text-3xl font-semibold">{model.name}</h1>
                    <p className="mt-4 text-gray-700">{model.description}</p>
                    <div className="my-4">
                        <p className="text-xl font-bold">Creator</p>
                        <p className="text-lg font-semibold">{model.creator}</p>

                        <p className="text-xl font-bold mt-2">Category</p>
                        <p className="text-lg font-semibold">{model.category}</p>
                        <p>Category: {model.category}</p>
                        <p className="text-2xl font-bold mt-2">Use Cases</p>
                        <ul className="list-disc pl-6">
                            {model.useCases.map((useCase, index) => (
                                <li key={index}>{useCase}</li>
                            ))}
                        </ul>
                        <p className="text-xl font-bold mt-2">Example</p>
                        {/* code example */}
                        <p className="text-lg font-semibold">{model.codeExample.language}</p>
                        <pre className="bg-gray-800 p-4 text-white rounded-lg mt-2">
                            {model.codeExample.code}
                        </pre>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Model