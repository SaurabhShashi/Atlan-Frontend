'use client'
import FeaturedModels from '@/components/FeaturedModels'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'

const FeaturedModelsScreen = () => {
    const [featuredModels, setFeaturedModels] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/api/models-featured")
            .then((res) => res.json())
            .then((data) => {
                setFeaturedModels(data);
            });
    }, [])
    return (
        <div>
            <Navbar />
            <FeaturedModels models={featuredModels} />
        </div>
    )
}

export default FeaturedModelsScreen