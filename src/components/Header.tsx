import { Button } from "@/components/ui/button";
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";
import "./Header-style.css";

export default function SectionHeader() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const style = {    
    fontFamily: 'Rubik Scribble, system-ui',
    fontWeight: 400,
    fontStyle: "normal",
  };

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <section className="w-full h-20 z-0 bg-gradient-to-r from-[#1e1e1e] to-[#3c3c3c] flex justify-between justidy-center">
      <div className="text-white font-bold ml-3 mt-2 mr-3 text-center leading-loose black-ops">
        <div className="text-xl">Harry</div>
        <div className="text-xl">Computer Science</div>
      </div>
      {/* 按鈕部分 */}
      <div className="flex gap-2 mr-3 items-center">
        {/* 大螢幕顯示的按鈕 */}
        <div className="right-buttons flex">
          {/* <Link href={`${BASE_URL}`}>
              <Button className="w-22 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border-none">
                About me
              </Button>
          </Link> */}
          <Button className="w-22 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border-none" aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            Projects
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link href="https://github.com/Harry-0613/Web-Development" target="_blank">
              <MenuItem onClick={handleClose}>Web Development</MenuItem>
            </Link>
            <Link href="https://github.com/x90613/TravelerWeb" target="_blank">
              <MenuItem onClick={handleClose}>Traveler - A full-stack application</MenuItem>
            </Link>
            <Link href="https://github.com/x90613/Algorithmic-Trading-Optimization-Technique" target="_blank">
              <MenuItem onClick={handleClose}>Algorithmic Trading Optimization Technique</MenuItem>
            </Link>
            <Link href="https://github.com/x90613/Rootkit-LKM" target="_blank">
              <MenuItem onClick={handleClose}>Rootkit - Loadable Kernel Module</MenuItem>
            </Link>
            <Link href="https://github.com/x90613/x90613.github.io" target="_blank">
              <MenuItem onClick={handleClose}>My Personal Website</MenuItem>
            </Link>
            {/* <Link href={`${BASE_URL}/coming-soon`}>
              <MenuItem onClick={handleClose}>Simple Shell</MenuItem>
            </Link> */}
          </Menu>
          <Link href="https://www.linkedin.com/in/harry-hsu-9b6b6a252" target="_blank">
            <Button className="w-22 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border-none">
              Linkedin
            </Button>
          </Link>
          <Link href="https://github.com/Harry-0613" target="_blank">
            <Button className="w-22 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border-none">
              Github
            </Button>
          </Link>
        </div>

        {/* 小螢幕顯示的摺疊按鈕 */}
        <div className="responsive-button hidden">
          <Button>...</Button>
        </div>
      </div>

      {/* CSS 媒體查詢 */}
      <style jsx>{`
        @media (max-width: 768px) {
          .right-buttons {
            display: none;
          }
          .responsive-button {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
