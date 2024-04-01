"use client";

import { useRouter } from "next/navigation";
const DisplayModels = ({ models }) => {
  const router = useRouter();
  return (
    <section className="mx-8 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {models.map((model, index) => (
          <div
            key={index}
            onClick={() => {
              router.push(`/model/${model.id}`);
            }}
            className="bg-white shadow-md  hover:shadow-yellow-300 rounded-md p-4 hover:cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2">{model.name}</h3>
            <p className="text-gray-600 mb-4">{model.description}</p>
            <p className="text-gray-500">Creator: {model.creator}</p>
            <p className="text-gray-500">Category: {model.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DisplayModels;
