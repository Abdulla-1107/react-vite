import React, { use } from 'react'
import card1 from '../../assets/card1.png' 
import card2 from '../../assets/card2.png' 
import user from '../../assets/user.png' 

const Card = () => {
  return (
    <section className="bg-white flex justify-center py-10">
      <div className="w-[960px] grid gap-2">
        <div className='flex justify-center items-center p-4 mb-2.5'>
        <h1 className="text-[25px] border-b-amber-100 opacity-90">Featured Posts</h1>
        </div>
        <div className="grid grid-cols-2 gap-[30px]">
          <div className="relative rounded overflow-hidden h-80">
            <img src={card1} alt="Card" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-opacity-40 p-6 flex flex-col justify-end text-white">
              <h1 className="text-3xl font-bold mb-2">The Road Ahead</h1>
              <p className="text-gray-300 mb-4">
                The road ahead might be paved - it might not be.
              </p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <img
                    src={user}
                    alt="User"
                    className="w-8 h-8 rounded-full border border-white"
                  />
                  <span>Mat Vogels</span>
                </div>
                <span>September 25, 2015</span>
              </div>
            </div>
          </div>

          <div className="relative rounded overflow-hidden h-80">
            <img src={card2} alt="Card" className="w-full h-full object-cover" />

            <div className="absolute inset-0  bg-opacity-40 p-6 flex flex-col justify-end text-white">
              <h1 className="text-3xl font-bold mb-2">From Top Down</h1>
              <p className="text-gray-300 mb-4">
                Once a year, go someplace you’ve never been before.
              </p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <img
                    src={user}
                    alt="User"
                    className="w-8 h-8 rounded-full border border-white"
                  />
                  <span>William Wong</span>
                </div>
                <span>September 26, 2015</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
