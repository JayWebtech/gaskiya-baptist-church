"use client";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaMoneyBill } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";

function Navbar({
  homeRef,
  aboutRef,
  activitiesRef,
  galleryRef,
  handleRefClick,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accountDetails = {
    accountName: "Gaskiya Baptist Church",
    accountNumber: "1234567890",
    bankName: "Union Bank",
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied!`);
  };

  return (
    <div className="bg-primary">
      <nav className="sticky top-0 z-[50] py-5 container mx-auto px-4 sm:px-10 md:px-8 lg:px-16">
        <div className="flex items-center justify-between gap-5">
          <div className="logo">
            <a href="#" onClick={() => handleRefClick(homeRef)}>
              {" "}
              <img
                src="/img/gbc_logo.png"
                alt="Logo"
                className="xl:w-auto w-10"
              />
            </a>
          </div>

          <div className="hidden md:flex gap-10">
            <p
              className="text-white cursor-pointer"
              onClick={() => handleRefClick(homeRef)}
            >
              Home
            </p>
            <p
              className="text-white cursor-pointer"
              onClick={() => handleRefClick(aboutRef)}
            >
              About
            </p>
            <p
              className="text-white cursor-pointer"
              onClick={() => handleRefClick(activitiesRef)}
            >
              Weekly activities
            </p>
            <p
              className="text-white cursor-pointer"
              onClick={() => handleRefClick(galleryRef)}
            >
              Gallery
            </p>
            <a
              href="https://morningview.org/more/resources/recommended-reading-lists/"
              target="_blank"
            >
              <p className="text-white">Books</p>
            </a>
          </div>

          <div className="hidden md:flex items-center">
            <button
              className="bg-second py-4 px-10 flex gap-3 text-black"
              onClick={() => setIsModalOpen(true)} // Open the modal when Donate is clicked
            >
              <FaMoneyBill className="w-6 h-6 text-gray-700 hover:text-gray-900" />{" "}
              Donate
            </button>
          </div>

          <div className="md:hidden flex ml-auto items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {menuOpen ? (
                <IoClose className="w-8 h-8 text-white" />
              ) : (
                <FiMenu className="w-8 h-8 text-white" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden w-full border-2 border-border py-2 mt-2 animated fadeIn flex flex-col rounded-xl">
            <div className="p-4 flex flex-col gap-5">
              <p
                className="text-white cursor-pointer"
                onClick={() => handleRefClick(homeRef)}
              >
                Home
              </p>
              <p
                className="text-white cursor-pointer"
                onClick={() => handleRefClick(aboutRef)}
              >
                About
              </p>
              <p
                className="text-white cursor-pointer"
                onClick={() => handleRefClick(activitiesRef)}
              >
                Weekly activities
              </p>
              <p
                className="text-white cursor-pointer"
                onClick={() => handleRefClick(galleryRef)}
              >
                Gallery
              </p>
              <a
                href="https://morningview.org/more/resources/recommended-reading-lists/"
                target="_blank"
              >
                <p className="text-white">Books</p>
              </a>
              <button
                className="bg-second w-full py-3 px-10 flex gap-3 justify-center text-black rounded-xl"
                onClick={() => setIsModalOpen(true)} // Open the modal when Donate is clicked
              >
                <FaMoneyBill className="w-6 h-6 text-gray-700 hover:text-gray-900" />{" "}
                Donate
              </button>
            </div>
          </div>
        )}
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full space-y-6">
            <h2 className="text-xl font-DMSansBold">Donation Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-DMSansBold">Account Name</p>
                  <span>{accountDetails.accountName}</span>
                </div>
                <FiCopy
                  className="cursor-pointer"
                  onClick={() => handleCopy(accountDetails.accountName)}
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-DMSansBold">Account Number</p>
                  <span>{accountDetails.accountNumber}</span>
                </div>
                <FiCopy
                  className="cursor-pointer"
                  onClick={() => handleCopy(accountDetails.accountNumber)}
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-DMSansBold">Bank Name</p>
                  <span>{accountDetails.bankName}</span>
                </div>
                <FiCopy
                  className="cursor-pointer"
                  onClick={() => handleCopy(accountDetails.bankName)}
                />
              </div>
            </div>
            <div className="text-right">
              <button
                className="bg-primary text-white py-2 px-6"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
