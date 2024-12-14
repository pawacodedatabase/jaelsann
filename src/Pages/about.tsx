import React from 'react';
import { FaFacebookSquare, FaInstagramSquare,  FaTwitterSquare } from 'react-icons/fa';


const team = [
    {
      name: 'Damilola Sobowale',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/150',
      social: {
        facebook: 'https://facebook.com/janedoe',
        twitter: 'https://twitter.com/janedoe',
        instagram: 'https://instagram.com/janedoe',
      },
    },
    {
      name: 'John ',
      role: 'Creative Director',
      image: 'https://via.placeholder.com/150',
      social: {
        facebook: 'https://facebook.com/johnsmith',
        twitter: 'https://twitter.com/johnsmith',
        instagram: 'https://instagram.com/johnsmith',
      },
    },
    {
      name: 'Sarah ',
      role: 'Marketing Manager',
      image: 'https://via.placeholder.com/150',
      social: {
        facebook: 'https://facebook.com/sarahlee',
        twitter: 'https://twitter.com/sarahlee',
        instagram: 'https://instagram.com/sarahlee',
      },
    },
  ];


const AboutBrand: React.FC = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        
        {/* Brand Introduction */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">About Jaels Ann</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold">Jaels Ann</span>, we believe fashion is more than just clothing; it’s a lifestyle. We are dedicated to providing premium-quality clothes, jewelry, and wristwatches that reflect style and elegance. With a passion for excellence and customer satisfaction, we strive to make every shopping experience extraordinary.
          </p>
        </section>

       

        {/* Meet the Team */}
      <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  {member.social.facebook && (
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600"
                    >
                      <FaFacebookSquare size={25} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-400"
                    >
                      <FaTwitterSquare size={25} />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-pink-500"
                    >
                      <FaInstagramSquare size={25} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        {/* Additional Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">More About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Jaels Ann started with a simple goal: to make fashion accessible and enjoyable for everyone. Over the years, we have expanded our offerings to include a diverse range of products, from trendy clothing to elegant accessories. Our commitment to quality, innovation, and customer satisfaction sets us apart in the fashion industry. We look forward to growing and continuing to serve our customers with passion and dedication.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Join the Jaels Ann Family</h3>
          <p className="text-gray-700 mb-6">
            Stay updated with our latest collections and exclusive offers.
          </p>
          <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-md hover:bg-indigo-700">
            Shop Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutBrand;
