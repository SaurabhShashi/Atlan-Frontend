"use client";
import { useRouter } from "next/navigation";

const FeaturedModels = ({ models }) => {
  const router = useRouter();
  return (
    <section className="mx-8 my-8">
      <h2 className="text-2xl font-bold mb-4">Featured Models</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {models.map((model, index) => (
          <div
            key={index}
            onClick={() => {
              router.push(`/model/${model.id}`);
            }}
            className="bg-white shadow-md  hover:shadow-orange-300 rounded-md p-4 hover:cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2">{model.name}</h3>
            <p className="text-gray-600 mb-4">{model.description}</p>
            <p className="text-gray-500">Creator: {model.creator}</p>
            <p className="text-gray-500">Category: {model.category}</p>

            {model.reasonForFeatured == "Most downloaded" ? (
              <p className="text-white-500  my-2  p-3 w-fit rounded-full bg-orange-400">
                Most Downloaded
              </p>
            ) : (
              <p className="text-white-500 my-2 p-3 w-fit rounded-full bg-purple-400">
                Most Favourites
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedModels;
