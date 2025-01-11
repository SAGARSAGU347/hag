"use client";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Menu {
  value: string;
  dropdown?: boolean;
}

function Menu({ value, dropdown = true }: Menu) {
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setMenuClicked(!menuClicked)}
        className="flex space-x-2 text-xl"
      >
        <div>{value}</div>
        {dropdown && (
          <div className="mt-1">
            {menuClicked ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        )}
      </button>
    </>
  );
}

export default Menu;
