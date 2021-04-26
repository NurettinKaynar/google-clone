import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 flex-grow">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 h-7 sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden  sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-500" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex " />
          <button hidden type="submit" onClick={search}>
            Ara
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://www.w3schools.com/howto/img_avatar.png"
        />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
