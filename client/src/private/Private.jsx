import { useState, useEffect } from "react";
import { useAuth } from "../context/auth.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import Spinner from "./../compnents/Spinner";

export const Private = () => {
  const [ok, setOk] = useState();
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await axios.get("/protected");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) checkAuth();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
};
