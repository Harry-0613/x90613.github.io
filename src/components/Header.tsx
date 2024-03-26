"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";


export default function SectionHeader() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <section className="w-full h-20 z-0  bg-gradient-to-r  from-[#1e1e1e] to-[#3c3c3c] flex justify-between">
      <div className="text-white font-bold ml-3 mt-2 mr-3 text-center">
        <div className="text-xl">Harry</div>
        <div>Computer Science</div>
      </div>
      <div className="flex gap-2 mt-[10px] mr-3">
        <Link href={`${BASE_URL}`}>
          <Button className="w-22 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border-none">
            About me
          </Button>
        </Link>
        <div>
          <Button className="w-22 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border-none"aria-controls={open ? 'basic-menu' : undefined}
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
            <Link href={`${BASE_URL}/project-Traveler`}>
              <MenuItem onClick={handleClose}>Traveler - FullStack website</MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>Algorithmic Trading Optimization Technique</MenuItem>
            <MenuItem onClick={handleClose}>Rootkit - Loadable Kernel Module</MenuItem>
            <MenuItem onClick={handleClose}>Website - My Personal Website</MenuItem>
          </Menu>
        </div>
        <Link href="https://www.linkedin.com/in/harry-hsu-9b6b6a252">
          <Button className="w-22 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border-none">
            Linkedin
          </Button>
        </Link>
        <Link href="https://github.com/x90613">
          <Button className="w-22 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border-none">
            Github
          </Button>
        </Link>
      </div>
    </section>
  );
}