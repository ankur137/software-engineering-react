import React, { useState, useEffect } from "react";
import Tuits from "../tuits";
import {Link, useNavigate} from "react-router-dom";
import * as service from "../../services/auth-service";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const user = await service.profile();
      setProfile(user);
    } catch (e) {
      navigate('/login');
    }
  }, [navigate]);
  const logout = () => {
    service.logout()
        .then(() => navigate('/login'));
  }
  return(
      <div>
        <h4>{profile.username}</h4>
        <h6>@{profile.username}</h6>
        <button onClick={logout}>
          Logout</button>
      </div>
  );
};
export default Profile;

