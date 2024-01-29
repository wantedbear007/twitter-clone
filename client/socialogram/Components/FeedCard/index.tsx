import React from "react";
import Image from "next/image";
import { BiMessage, BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-gray-500  border-r-0 border-l-0 border-b-0 p-4 hover:bg-gray-600 transition-all cursor-pointer">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Image
            src="https://avatars.githubusercontent.com/u/83907431?v=4"
            alt="userimage"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-10">
          <h5>Bhanupratap Singh</h5>
          {/* <pre> */}
            <p>Hello this is a twitter clone !</p>
          {/* </pre> */}
        {/* </div> */}
        <div className="flex items-center justify-evenly mt-5 text-2xl">
          <div>
            <BiMessageRounded />
          </div>
          <div>
            <FaRetweet />
          </div>
          <div>
            <AiFillHeart />
          </div>
          <div>
            <BiUpload />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
