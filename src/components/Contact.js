import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Address</h2>
            <p className="text-gray-600">
              123 Restaurant Street,
              <br />
              Cityville, Foodland
              <br />
              Zip: 12345
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contact Information</h2>
            <p className="text-gray-600">
              Phone: +1 (123) 456-7890
              <br />
              Email: info@restaurant.com
            </p>
          </div>
        </div>
        <form className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
                placeholder="john.doe@example.com"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600 font-semibold mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-orange-500"
              rows="4"
              placeholder="How can we assist you?"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
