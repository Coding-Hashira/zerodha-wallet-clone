import React from "react";

const Profile = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="h-7 w-7 hover:scale-105 transition-all cursor-pointer bg-[#e2e2e2] rounded-full "></div>
      <div className="text-sm text-gray-600 font-medium cursor-pointer hover:underline transition-all">
        Jashan Mago
      </div>
    </div>
  );
};

export default Profile;
