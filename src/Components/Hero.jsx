import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex-col items-center justify-center p-4 ">
        <div className="text-center">
          <h1 className="m-10 ">
            Real-Time <br /> Crypto Price Tracker
          </h1>
          <p className="md:px-60">
            Stay up-to-date with real-time cryptocurrency prices. Track the
            latest market trends and make informed investment decisions with our
            comprehensive crypto price tracker.
          </p>
          <form action="">
            <div className="flex justify-center m-10">
              <input
                className=" px-2 w-[70%] md:w-auto mx-5 rounded-md bg-[var(--bg)] border-[1px] border-[var(--primary)]"
                type="text"
                placeholder="Seach Crypto"
              ></input>
              <button className="">Seach</button>
            </div>
          </form>
          <div className="max-w-[800px] m-auto rounded-md bg-blue-950">
            <div className="grid grid-cols-custom items-center border-b-[1px] py-4 px-5 border-b-gray-500">
              <p>#</p>
              <p>Coins</p>
              <p>Price</p>
              <p>24Hr Change</p>
              <p>Market Cap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
