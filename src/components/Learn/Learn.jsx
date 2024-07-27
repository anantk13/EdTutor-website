import React from 'react'
import { Link } from 'react-router-dom';

export default function Learn() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12 object-cover object-center">
                      <img
                          src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 text-center font-bold md:text-4xl">
                      Javascript                      </h2>
                      <p className="mt-6 text-gray-600">
                      JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.
                      </p>
                      <p className="mt-4 text-gray-600 mb-6">
                      JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.
                      </p>
                      <Link to="/payment"
                       className="bg-red-800 hover:bg-red-400 text-white px-4 py-2 rounded mt-20">Buy for ₹999</Link>
                  </div>
              </div>
          </div>
      </div>
  );
}