import React from 'react';

const MenuShowcase = () => {
  const menuItems = [
    {
      id: 1,
      name: "Classic Bun",
      description: "Our signature soft bun with secret seasoning",
      price: "$3.99",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
    },
    {
      id: 2,
      name: "Cheese Blast",
      description: "Melted cheese stuffed bun with herbs",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8"
    },
    {
      id: 3,
      name: "Spicy Delight",
      description: "Hot and spicy bun with special sauce",
      price: "$4.49",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae"
    },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Signature Buns</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-gray-300 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-bold">{item.price}</span>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuShowcase;