import React, { useState, useEffect } from "react";
import {
  IconButton,
  Tooltip,
  InputAdornment,
  TextField,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const NavButton = ({ title, icon, func }) => {
  return (
    <Tooltip title={title}>
      <IconButton
        type="button"
        className="relative swatch_text-primary rounded-full"
        onClick={func}
      >
        <span className="absolute rounded-full h-2 w-2 right-2 top-3 swatch_bg-secondary"></span>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mt-4 px-8">
      <div className="flex items-center gap-32">
        <div className="flex items-center gap-8">
          <Link href="/">
            <a className="uppercase text-lg font-light swatch_text-secondary">
              music
            </a>
          </Link>
          <Link href="/">
            <a className="uppercase text-lg font-light swatch_text-primary">
              podcast
            </a>
          </Link>
          <Link href="/">
            <a className="uppercase text-lg font-light swatch_text-primary">
              live
            </a>
          </Link>
        </div>

        <div className="flex items-center p-3 gap-2 border-[1px] border-gray-500 rounded-md swatch_bg-brown">
          <SearchIcon className="text-gray-300" fontSize="small" />
          <input
            type="text"
            placeholder="Type here to search"
            className="outline-none border-none text-gray-300 placeholder-gray-300 bg-transparent text-sm"
          />
        </div>
      </div>

      <div className="flex items-center">
        <NavButton
          icon={<NotificationsIcon />}
          title={"Notifications"}
          func={() => {}}
        />
        <NavButton icon={<SettingsIcon />} title={"Settings"} func={() => {}} />

        <Tooltip title="Profile">
          <div className="flex items-center gap-2 swatch_bg-brown p-2 ml-2 px-3 rounded">
            <Avatar
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              variant="square"
              className="w-[30px] h-[30px] rounded"
            />
            <span className="text-sm text-gray-300 capitalize">
              Dave Cooper
            </span>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};
=======
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className="h-16 bg-black text-white text-xs flex justify-between px-4">
      <ul className='flex space-x-4 my-auto'>
        <li>MUSIC</li>
        <li>PODCAST</li>
        <li>LIVE</li>
      </ul>
      <div className="input relative flex items-center">
        <input 
          type="text" 
          className='w-64 py-2 border-2 border-gray-500 rounded-md bg-[#21262b] indent-10 focus:outline-none'
          placeholder='Type here to search' />
        <div className="sIcon absolute left-2 top-6">
          <SearchIcon fontSize='small'/>
        </div>
      </div>
      <div className='flex items-center space-x-5'>
        <NotificationsIcon fontSize='small'/>
        <SettingsIcon fontSize='small'/>
        <div className="profile min-w-[170px] my-4 bg-slate-800 flex rounded-md">
          <div className="profile-image bg-slate-700 p-1 rounded-md flex justify-center items-center">
            <AccountBoxIcon fontSize='small'/>
          </div>
          <p className='flex px-2 items-center'>User Name</p>
        </div>
      </div>
    </div>
  )
}
export default Navbar;