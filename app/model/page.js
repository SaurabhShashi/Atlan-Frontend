"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import Navbar from '@/components/Navbar';

const Model = () => {
    const router = useRouter();

    // Redirect to home page
    const redirectToHome = () => {
        router.replace('/');
    };

    return (
        <div className='flex-col justify-between items-center text-center'>
            <Navbar />
            <p className='text-center mt-48 text-2xl font-bold'>Visit any specific model page</p>

            <button className='p-6 bg-slate-500 rounded-full text-center mt-48 text-2xl font-bold' onClick={redirectToHome}>Go to Home</button>
        </div>
    );
};

export default Model;