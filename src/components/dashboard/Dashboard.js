import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../layout/Preloader";
import BurnUp from "../dashboard/BurnUp";
import Schedule from "../dashboard/Schedule";
import {
  getDashboardData,
  getAppsData,
  getGBData,
} from "../../actions/inventoryActions";

const Dashboard = ({
  inventoryReducer: { dashboard, apps, gb, loading },
  getDashboardData,
  getAppsData,
  getGBData,
}) => {
  useEffect(() => {
    getDashboardData();
    getAppsData();
    getGBData();
    console.log("GB data in dashboardL ", gb);
  }, []);

  if (loading || dashboard === null) {
    return <Preloader />;
  }

  const cutover_dates = Object.values(dashboard["cutover_date"]);
  const plan = Object.values(dashboard["Servers_Plan"]);
  const actual = Object.values(dashboard["Servers_Actual"]);

  const cumulative_servers_plan = Object.values(dashboard["Cum_Servers_Plan"]);
  const cumulative_servers_actual = Object.values(
    dashboard["Cum_Servers_Actual"]
  );

  const servers_plan =
    cumulative_servers_plan[cumulative_servers_plan.length - 1];
  // const servers_actual = Object.values(dashboard["Cum_Servers_Actual"]).reverse().find((s) => s != null);

  const cum_apps_plan_data = Object.values(apps["Cum_Apps_Plan"]);
  const apps_plan = cum_apps_plan_data[cum_apps_plan_data.length - 1];

  const cum_gb_plan_data = Object.values(gb["Cum_GB_Plan"]);
  const gb_plan = cum_gb_plan_data[cum_gb_plan_data.length - 1] / 1000;

  return (
    <div>
      <div className="row center">
        <div className="col s12 m9">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Burnup</span>
              {!loading && cutover_dates.length === 0 ? (
                <p>No data</p>
              ) : (
                <BurnUp
                  cutover_dates={cutover_dates}
                  plan={cumulative_servers_plan}
                  actual={cumulative_servers_actual}
                />
              )}
            </div>
          </div>
        </div>
        <div className="col s12 m3">
          <div className="row center">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">
                  <i className="material-icons large">computer</i>
                </span>
                <span>
                  <h3>{servers_plan}</h3>
                  <p>servers</p>
                </span>
              </div>
            </div>
            </div>
          <div className="row center">
          <div className="card grey lighten-1">
              <div className="card-content">
                <span className="card-title">
                  <i className="material-icons large">apps</i>
                </span>
                <span>
                  <h3>{apps_plan}</h3>
                  <p>apps</p>
                </span>
              </div>
            </div>
          </div >
        </div>
      </div>

      <div className="row center">
        <div className="col s12 m3">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                <i className="material-icons large">storage</i>
              </span>
              <span>
                <h3>{gb_plan} TB</h3>
                <p>storage</p>
              </span>
            </div>
          </div>
        </div>

        <div className="col s12 m9">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Burnup</span>
              {!loading && cutover_dates.length === 0 ? (
                <p>No data</p>
              ) : (
                <Schedule
                  cutover_dates={cutover_dates}
                  plan={plan}
                  actual={actual}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // logReducer comes from rootreducer
  inventoryReducer: state.inventoryReducer,
});

export default connect(mapStateToProps, {
  getDashboardData,
  getAppsData,
  getGBData,
})(Dashboard);
