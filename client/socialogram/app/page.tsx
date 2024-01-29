import Image from "next/image";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import {
  BiBell,
  BiBookmark,
  BiEnvelope,
  BiHash,
  BiHomeCircle,
  BiUser,
} from "react-icons/bi";
import FeedCard from "@/Components/FeedCard";
import { Inter } from "next/font/google";

// const inter = Inter({ subset: ["latin"] });

interface TwitterSideBar {
  key: Number;
  title: String;
  icon: React.ReactNode;
}

const sideBarMenu: TwitterSideBar[] = [
  {
    key: 1,
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    key: 2,
    title: "Explore",
    icon: <BiHash />,
  },
  {
    key: 3,
    title: "Notification",
    icon: <BiBell />,
  },
  {
    key: 4,
    title: "Messages",
    icon: <BiEnvelope />,
  },
  {
    key: 5,
    title: "Bookmarks",
    icon: <BiBookmark />,
  },
  {
    key: 6,
    title: "Profile",
    icon: <BiUser />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3  pl-16  pt-8">
          <div className="text-5xl h-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-2xl font-bold pr-4">
            <ul>
              {sideBarMenu.map((item) => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full p-5 mr-4 w-fit cursor-pointer">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#1d9bf0] rounded-full w-full mt-4 p-3 mr-4 cursor-pointer hover:bg-black-300">
              Tweet
            </button>
          </div>
        </div>

        <div className="col-span-6 border-r-[0.5px] border-l-[0.5px] border-slate-800">
          <FeedCard />
          <FeedCard />

          <FeedCard />

          <FeedCard />

        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
