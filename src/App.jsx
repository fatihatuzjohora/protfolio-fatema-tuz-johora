import "./App.css";
import { IoMdSearch } from "react-icons/io";

import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

function App() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const link = (
    <>
      
        <NavLink className=" font-semibold text-slate-400 text-lg">Home</NavLink>
      
      
    </>
  );

  return (
    <div className="">

      {link}

    </div>
  );
}

export default App;
