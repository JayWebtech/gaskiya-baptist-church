"use client";
import React, { useState } from "react";

const ChurchGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
  ];

  // Open lightbox and set the initial index of the image
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close the lightbox
  const closeLightbox = () => {
    setIsOpen(false);
  };

  // Go to the next image in the gallery
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to the previous image in the gallery
  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-10 text-center">
      <h2 className="text-4xl font-DMSansBold text-primary mb-10">Gallery</h2>

      {/* Thumbnails gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-md"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt={`Church image ${index + 1}`}
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative max-w-3xl max-h-[90vh]">
            {/* Current Image */}
            <img
              src={images[currentIndex]}
              alt="Lightbox image"
              className="w-full h-auto object-contain rounded-md"
            />

            {/* Previous Button */}
            <button
              className="absolute top-1/2 left-0 p-4 text-white bg-black bg-opacity-50 rounded-full transform -translate-y-1/2"
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal close when clicking prev button
                goToPrev();
              }}
            >
              &#10094;
            </button>

            {/* Next Button */}
            <button
              className="absolute top-1/2 right-0 p-4 text-white bg-black bg-opacity-50 rounded-full transform -translate-y-1/2"
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal close when clicking next button
                goToNext();
              }}
            >
              &#10095;
            </button>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-4 text-white bg-black bg-opacity-50 rounded-full"
              onClick={closeLightbox}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ChurchGallery;

