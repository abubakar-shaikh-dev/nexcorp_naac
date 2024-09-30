import React from "react";

//Components
import Navigation from "../../components/partials/Navigation";
import Stepper from "../../components/Stepper";
import StatusBadges from "../../components/StatusBadges"
import profile_stepper_data from "./profile-stepper-data";
import TabNavigation from "../../components/TabNavigation";

export default function Profile({ children }) {
  return (
    <>
      <Navigation />
        <TabNavigation />
        <div className="shadow-xl p-5 my-10 mx-5 bg-white ">
          <div className="flex flex-col gap-4">
          <div className="flex justify-between flex-col items-start md:flex-row md:items-center">
              <h1 className="font-bold text-xl">
               Profile of the Institution
              </h1>
              <StatusBadges />
            </div>
            <div className="flex justify-end gap-4 text-sm">
              <div className="flex justify-center gap-3 items-center">
                <span className="font-semibold">Status of the Application</span>
                <div className="bg-green-500 px-4 py-1 text-white rounded-full mr-2 shadow-md">
                  Approved
                </div>
              </div>
            </div>

            <Stepper data={profile_stepper_data()} />

            {children}
            
          </div>
        </div>
    </>
  );
}
