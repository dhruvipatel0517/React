import React from "react";


const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">


      {/* Hero */}
      <section className="bg-[#ece4da]  py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you have a question about products,
          orders, or anything else.
        </p>
      </section>


      {/* Contact Section */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
       
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">
            Send a Message
          </h2>


          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />


            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />


            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />


            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>


            <button
              type="submit"
              className="w-full bg-[#583101]  text-white py-3 rounded-lg font-medium hover:bg-[#9e5802]  transition"
            >
              Send Message
            </button>
          </form>
        </div>


        {/* Contact Info */}
        <div className="space-y-6">
         
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2">📍 Address</h3>
            <p className="text-gray-600">
              8502 Preston Rd. Inglewood, Maine 98380
            </p>
          </div>


          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2">📞 Phone</h3>
            <p className="text-gray-600">+0123-456-789</p>
          </div>


          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2">📧 Email</h3>
            <p className="text-gray-600">support@example.com</p>
          </div>


          <div className="bg-[#ece4da]  rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">
              Customer Support
            </h3>
            <p className="text-gray-600">
              Our team is available 24/7 to assist you with your queries.
            </p>
          </div>


        </div>
      </section>


      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-80 border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>


    </div>
  );
};


export default Contact;



