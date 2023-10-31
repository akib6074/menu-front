import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { SystemTaskDto } from "../dto/System-task.dto";
import systemTaskService from "../services/SystemTaskService";

const Accordian = ({ menu, id, routeParam }: { menu: SystemTaskDto; id: number, routeParam: number }) => {
  const [th, setTh] = useState([""]);
  const maxDepth = async () => {
    const res = await systemTaskService.maxDepth(id);
    let arr = [];
    for (let i = 0; i < res; i++) arr.push("dummy");
    setTh(arr);
  };

  useEffect(() => {
    maxDepth();
  }, []);
  return (
    <div className="collapse collapse-arrow join-item border border-base-300">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">{menu?.name_en}</div>
      <div className="collapse-content">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Module/Task</th>
                {th?.map((item) => (
                  <>
                    <th></th>
                  </>
                ))}
                <th>View</th>
                <th>Add</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Forward</th>
                <th>Print</th>
                <th>CSV</th>
                <th>Search</th>
                <th>Column Control</th>
              </tr>
            </thead>
            <tbody>
              {menu ? (
                <>
                  <TableRow item={[menu]} count={0} max={th?.length} routeParam={routeParam} />
                </>
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
