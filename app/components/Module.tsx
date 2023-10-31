import React from "react";
import { SystemTaskDto } from "../dto/System-task.dto";

const Module = ({
  data,
  arr,
  arrayLate,
}: {
  data: SystemTaskDto;
  arr: string[];
  arrayLate: string[];
}) => {
  return (
    <tr>
      {arr.map((x) => (
        <td></td>
      ))}
      <td>
        <div>
          <span>{data?.name_en}</span>
        </div>
      </td>
      {arrayLate.map((x) => (
        <td></td>
      ))}
    </tr>
  );
};

export default Module;
