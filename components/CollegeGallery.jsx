"use client";

import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/college1.webp",
    alt: "Graduates from ABC College",
  },
  {
    id: 2,
    src: "/gallery/college2.webp",
    alt: "Group photo at XYZ University",
  },
  {
    id: 3,
    src: "/gallery/college3.webp",
    alt: "Convocation Day group",
  },
  {
    id: 4,
    src: "/gallery/college4.webp",
    alt: "Engineering batch 2024",
  },
  {
    id: 5,
    src: "/gallery/college5.webp",
    alt: "Medical College students",
  },
  {
    id: 6,
    src: "/gallery/college6.webp",
    alt: "Final year celebration",
  },
];

const CollegeGallery = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">
          College Memories Gallery
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Explore group moments and celebrations of our proud graduates
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={300}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeGallery;
