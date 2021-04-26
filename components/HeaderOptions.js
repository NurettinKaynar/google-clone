import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-md lg:justify-start lg:space-x-32 lg:pl-52 border-b-[1px]">
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="Tümü" selected />
        <HeaderOption Icon={PhotographIcon} title="Görseller" />
        <HeaderOption Icon={PlayIcon} title="Videolar" />
        <HeaderOption Icon={NewspaperIcon} title="Haberler" />
        <HeaderOption Icon={MapIcon} title="Harita" />
        <HeaderOption Icon={DotsVerticalIcon} title="Daha Fazla" />
      </div>
      <div className="flex space-x-4">
        <p className="link">Ayarlar</p>
        <p className="link">Araçlar</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
