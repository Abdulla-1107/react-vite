import React from 'react';
import card1 from '../../assets/balloon.png';
import card2 from '../../assets/bridge.png';
import user from '../../assets/user.png';
import nature from '../../assets/nature.png';
import water from '../../assets/water.png';
import card3 from '../../assets/tuman.png';
import card4 from '../../assets/card4.png';

const Cards = () => {
  return (
    <section className="bg-white flex justify-center py-10">
      <div className="w-[960px] grid gap-2">
        <div className="flex justify-center items-center p-4 mb-2.5">
          <h1 className="text-[25px] border-b-amber-100 opacity-90">Most Recent</h1>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          {/* Birinchi karta */}
          <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="h-48">
              <img
                src={card1}
                alt="Hot air balloons"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">Still Standing Tall</h2>
              <p className="text-gray-600 mt-2">
                Life begins at the end of your comfort zone.xoneoiadadf
              </p>
            </div>
            <div className="flex items-center p-4 border-t">
              <img
                src={user}
                alt="User avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <p className="text-gray-700 font-semibold">William Wong</p>
              </div>
              <p className="text-gray-500 text-sm">9/25/2015</p>
            </div>
          </div>

          {/* Ikkinchi karta */}
          <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="h-48">
              <img
                src={card2}
                alt="Hot air balloons"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">Still Standing Tall</h2>
              <p className="text-gray-600 mt-2">
                Life begins at the end of your comfort zone.
              </p>
            </div>
            <div className="flex items-center p-4 border-t">
              <img
                src={user}
                alt="User avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <p className="text-gray-700 font-semibold">William Wong</p>
              </div>
              <p className="text-gray-500 text-sm">9/25/2015</p>
            </div>
          </div>

          {/* Uchinchi karta */}
          <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="h-48">
              <img
                src={card3}
                alt="Foggy landscape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">Into the Mist</h2>
              <p className="text-gray-600 mt-2">
                Embrace the unknown with open arms.
              </p>
            </div>
            <div className="flex items-center p-4 border-t">
              <img
                src={user}
                alt="User avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <p className="text-gray-700 font-semibold">William Wong</p>
              </div>
              <p className="text-gray-500 text-sm">11/20/2017</p>
            </div>
          </div>

          {/* To'rtinchi karta */}
          <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="h-48">
              <img
                src={nature}
                alt="Nature"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">Nature's Call</h2>
              <p className="text-gray-600 mt-2">
                Find peace in the heart of nature.
              </p>
            </div>
            <div className="flex items-center p-4 border-t">
              <img
                src={user}
                alt="User avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <p className="text-gray-700 font-semibold">William Wong</p>
              </div>
              <p className="text-gray-500 text-sm">12/10/2018</p>
            </div>
          </div>

          {/* Beshinchi karta */}
          <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="h-48">
              <img
                src={water}
                alt="Water"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">Flowing Serenity</h2>
              <p className="text-gray-600 mt-2">
                Let the water guide your soul.
              </p>
            </div>
            <div className="flex items-center p-4 border-t">
              <img
                src={user}
                alt="User avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <p className="text-gray-700 font-semibold">William Wong</p>
              </div>
              <p className="text-gray-500 text-sm">1/15/2019</p>
            </div>
          </div>

          {/* Oltinchi karta */}
          <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="h-48">
              <img
                src={card4}
                alt="Card 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">Golden Horizon</h2>
              <p className="text-gray-600 mt-2">
                Chase the sun to new beginnings.
              </p>
            </div>
            <div className="flex items-center p-4 border-t">
              <img
                src={user}
                alt="User avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <p className="text-gray-700 font-semibold">William Wong</p>
              </div>
              <p className="text-gray-500 text-sm">2/20/2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;