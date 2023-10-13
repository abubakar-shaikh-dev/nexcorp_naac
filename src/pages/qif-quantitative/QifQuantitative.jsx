import React from "react";

//Components
import Navigation from "../../components/partials/Navigation";
import StatusBadges from "../../components/StatusBadges";
import FolderTreeSidebar from "./FolderTreeSidebar";
import qif_quantitative_tree_data from "./qif_quantitative_tree_data";
import TabNavigation from "../../components/TabNavigation";

export default function QifQualitative() {
  return (
    <>
      <Navigation />
      <TabNavigation />
      <div className="shadow-xl p-5 my-10 mx-5 bg-white ">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between flex-col mb-3 items-start md:flex-row md:items-center">
            <h1 className="font-bold text-xl">
            QIF Quantitative Metric for Trial - A J Institute of Engineering and Technology Mangaluru
            </h1>
            <StatusBadges />
          </div>
          {/* <div className="flex justify-end gap-4 text-sm ">
              <div className="flex justify-center gap-3 items-center">
                <span className="font-semibold">Status of the Application</span>
                <div className="bg-green-500 px-4 py-1 text-white rounded-full mr-2 shadow-md">
                  Approved
                </div>
              </div>
            </div> */}

          <section>
            <FolderTreeSidebar data={qif_quantitative_tree_data} />
          </section>
        </div>
      </div>
    </>
  );
}
