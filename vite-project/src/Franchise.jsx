import React from 'react';

const FranchiseBenefits = () => {
  const benefits = [
    {
      title: "Proven Business Model",
      description: "Join a system with established operational procedures and marketing strategies.",
      icon: "📊"
    },
    {
      title: "Training & Support",
      description: "Comprehensive training programs for you and your staff.",
      icon: "🎓"
    },
    {
      title: "Marketing Assistance",
      description: "National and local marketing support to help grow your business.",
      icon: "📢"
    },
    {
      title: "Quality Ingredients",
      description: "Access to our network of premium suppliers at competitive prices.",
      icon: "🍞"
    },
  ];

  return (
    <section id="franchise" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Bun Stop Franchise?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to succeed in the competitive food industry.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="bg-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-600 transition">
            Request Franchise Information
          </button>
        </div>
      </div>
    </section>
  );
};

export default FranchiseBenefits;