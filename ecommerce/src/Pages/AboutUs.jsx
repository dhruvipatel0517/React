import React from "react";


const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">


      {/* Hero Section */}
      <section className="bg-[#ece4da]  py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Our Company
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We create high-quality products with a focus on simplicity,
          elegance, and customer satisfaction.
        </p>
      </section>


      {/* About Content */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
       
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="team"
          className="rounded-2xl shadow-md"
        />


        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            Our journey started with a simple idea: make premium products
            accessible and beautifully designed.
          </p>
          <p className="text-gray-600">
            We combine innovation with simplicity to deliver a seamless
            shopping experience.
          </p>
        </div>
      </section>


      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
         
          {[
            { value: "10K+", label: "Customers" },
            { value: "500+", label: "Products" },
            { value: "5 Years", label: "Experience" },
            { value: "24/7", label: "Support" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-indigo-500">
                {item.value}
              </h3>
              <p className="text-gray-500">{item.label}</p>
            </div>
          ))}


        </div>
      </section>


      {/* Team */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Our Team
        </h2>


        <div className="grid md:grid-cols-3 gap-8">
         
          {[
            {
              name: "Sarah Johnson",
              role: "CEO",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Michael Lee",
              role: "Designer",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "David Kim",
              role: "Marketing",
              img: "https://randomuser.me/api/portraits/men/45.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center"
            >
              <img
                src={member.img}
                alt="team"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}


        </div>
      </section>


      {/* CTA */}
      <section className="bg-[#ece4da]  py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Start Your Journey With Us
        </h2>
        <p className="text-gray-600 mb-6">
          Explore our products and experience premium quality.
        </p>
        <button className="bg-[#583101]  text-white px-6 py-3 rounded-full font-medium hover:bg-[#9e5802]  transition">
          Shop Now
        </button>
      </section>


    </div>
  );
};


export default About;



