import React, { useState } from "react";
import { SystemTaskDto } from "../dto/System-task.dto";
import UserGroupDto from "../dto/User-group.dto";
import userGroupService from "../services/UserGroupService";

const Task = ({
  arr,
  arry,
  data,
  userGroup,
  routeParam
}: {
  arr: string[];
  arry: string[];
  data: SystemTaskDto;
  userGroup: UserGroupDto;
  routeParam: number;
}) => {
  const [action_0, setAction_0] = useState(true);
  const [action_1, setAction_1] = useState(true);
  const [action_2, setAction_2] = useState(true);
  const [action_3, setAction_3] = useState(true);
  const [action_4, setAction_4] = useState(true);
  const [action_5, setAction_5] = useState(true);
  const [action_6, setAction_6] = useState(true);
  const [action_7, setAction_7] = useState(true);
  const [action_8, setAction_8] = useState(true);
  const [eaction_0, setEaction_0] = useState(false);
  const [eaction_1, setEaction_1] = useState(false);
  const [eaction_2, setEaction_2] = useState(false);
  const [eaction_3, setEaction_3] = useState(false);
  const [eaction_4, setEaction_4] = useState(false);
  const [eaction_5, setEaction_5] = useState(false);
  const [eaction_6, setEaction_6] = useState(false);
  const [eaction_7, setEaction_7] = useState(false);
  const [eaction_8, setEaction_8] = useState(false);
  const action_0HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked){
        userGroupService.updateByFieldandGroupId(routeParam,'action_0',e.target.value,'checked');
    }else{
        userGroupService.updateByFieldandGroupId(routeParam,'action_0',e.target.value,'unchecked');
    }
    if (action_0 == true) {
      setAction_0(false);
    } else {
      setAction_0(true);
    }
    if (eaction_0 == false) {
        setEaction_0(true);
      } else {
        setEaction_0(false);
      }
  };
  const action_1HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked){
        userGroupService.updateByFieldandGroupId(routeParam,'action_1',e.target.value,'checked');
    }else{
        userGroupService.updateByFieldandGroupId(routeParam,'action_1',e.target.value,'unchecked');
    }
    if (action_1 == true) {
      setAction_1(false);
    } else {
      setAction_1(true);
    }
    if (eaction_1 == false) {
        setEaction_1(true);
      } else {
        setEaction_1(false);
      }
  };
  const action_2HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked){
        userGroupService.updateByFieldandGroupId(routeParam,'action_2',e.target.value,'checked');
    }else{
        userGroupService.updateByFieldandGroupId(routeParam,'action_2',e.target.value,'unchecked');
    }
    if (action_2 == true) {
      setAction_2(false);
    } else {
      setAction_2(true);
    }
    if (eaction_2 == false) {
        setEaction_2(true);
      } else {
        setEaction_2(false);
      }
  };
  const action_3HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked){
        userGroupService.updateByFieldandGroupId(routeParam,'action_3',e.target.value,'checked');
    }else{
        userGroupService.updateByFieldandGroupId(routeParam,'action_3',e.target.value,'unchecked');
    }
    if (action_3 == true) {
      setAction_3(false);
    } else {
      setAction_3(true);
    }
    if (eaction_3 == false) {
        setEaction_3(true);
      } else {
        setEaction_3(false);
      }
  };
  const action_4HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked){
        userGroupService.updateByFieldandGroupId(routeParam,'action_4',e.target.value,'checked');
    }else{
        userGroupService.updateByFieldandGroupId(routeParam,'action_4',e.target.value,'unchecked');
    }
    if (action_4 == true) {
      setAction_4(false);
    } else {
      setAction_4(true);
    }
    if (eaction_4 == false) {
        setEaction_4(true);
      } else {
        setEaction_4(false);
      }
  };
  const action_5HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked){
        userGroupService.updateByFieldandGroupId(routeParam,'action_5',e.target.value,'checked');
    }else{
        userGroupService.updateByFieldandGroupId(routeParam,'action_5',e.target.value,'unchecked');
    }
    if (action_5 == true) {
      setAction_5(false);
    } else {
      setAction_5(true);
    }
    if (eaction_5 == false) {
        setEaction_5(true);
      } else {
        setEaction_5(false);
      }
  };
  const action_6HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked){
        userGroupService.updateByFieldandGroupId(routeParam,'action_6',e.target.value,'checked');
    }else{
        userGroupService.updateByFieldandGroupId(routeParam,'action_6',e.target.value,'unchecked');
    }
    if (action_6 == true) {
      setAction_6(false);
    } else {
      setAction_6(true);
    }
    if (eaction_6 == false) {
        setEaction_6(true);
      } else {
        setEaction_6(false);
      }
  };
  const action_7HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked){
        userGroupService.updateByFieldandGroupId(routeParam,'action_7',e.target.value,'checked');
    }else{
        userGroupService.updateByFieldandGroupId(routeParam,'action_7',e.target.value,'unchecked');
    }
    if (action_7 == true) {
      setAction_7(false);
    } else {
      setAction_7(true);
    }
    if (eaction_7 == false) {
        setEaction_7(true);
      } else {
        setEaction_7(false);
      }
  };
  const action_8HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked){
        userGroupService.updateByFieldandGroupId(routeParam,'action_8',e.target.value,'checked');
    }else{
        userGroupService.updateByFieldandGroupId(routeParam,'action_8',e.target.value,'unchecked');
    }
    if (action_8 == true) {
      setAction_8(false);
    } else {
      setAction_8(true);
    }
    if (eaction_8 == false) {
      setEaction_8(true);
    } else {
      setEaction_8(false);
    }
  };

  return (
    <tr>
      {arr.map((x) => (
        <td></td>
      ))}

      <td>{data?.name_en}</td>
      <>
        {arry.map((x) => (
          <td></td>
        ))}
      </>
      <td>
        <div>
          <input
            type="checkbox"
            className="checkbox checkbox-sm"
            name="action_0"
            value={`${data?.id}`}
            checked={
              userGroup?.action_0?.split(",").includes(data?.id.toString())
                ? userGroup?.action_0
                    ?.split(",")
                    .includes(data?.id.toString()) && action_0
                : eaction_0
            }
            onChange={action_0HandleChange}
          />
        </div>
      </td>
      <td>
        <div>
          <input
            type="checkbox"
            name="action_1"
            className="checkbox checkbox-sm"
            value={`${data?.id}`}
            checked={
              userGroup?.action_1?.split(",").includes(data?.id.toString())
                ? userGroup?.action_1
                    ?.split(",")
                    .includes(data?.id.toString()) && action_1
                : eaction_1
            }
            onChange={action_1HandleChange}
          />
        </div>
      </td>
      <td>
        <div>
          <input
            type="checkbox"
            name="action_2"
            className="checkbox checkbox-sm"
            value={`${data?.id}`}
            checked={
              userGroup?.action_2?.split(",").includes(data?.id.toString())
                ? userGroup?.action_2
                    ?.split(",")
                    .includes(data?.id.toString()) && action_2
                : eaction_2
            }
            onChange={action_2HandleChange}
          />
        </div>
      </td>
      <td>
        <div>
          <input
            type="checkbox"
            name="action_3"
            className="checkbox checkbox-sm"
            value={`${data?.id}`}
            checked={
              userGroup?.action_3?.split(",").includes(data?.id.toString())
                ? userGroup?.action_3
                    ?.split(",")
                    .includes(data?.id.toString()) && action_3
                : eaction_3
            }
            onChange={action_3HandleChange}
          />
        </div>
      </td>
      <td>
        <div>
          <input
            type="checkbox"
            name="action_4"
            className="checkbox checkbox-sm"
            value={`${data?.id}`}
            checked={
              userGroup?.action_4?.split(",").includes(data?.id.toString())
                ? userGroup?.action_4
                    ?.split(",")
                    .includes(data?.id.toString()) && action_4
                : eaction_4
            }
            onChange={action_4HandleChange}
          />
        </div>
      </td>
      <td>
        <div>
          <input
            type="checkbox"
            name="action_5"
            className="checkbox checkbox-sm"
            value={`${data?.id}`}
            checked={
              userGroup?.action_5?.split(",").includes(data?.id.toString())
                ? userGroup?.action_5
                    ?.split(",")
                    .includes(data?.id.toString()) && action_5
                : eaction_5
            }
            onChange={action_5HandleChange}
          />
        </div>
      </td>
      <td>
        <div>
          <input
            type="checkbox"
            name="action_6"
            className="checkbox checkbox-sm"
            value={`${data?.id}`}
            checked={
              userGroup?.action_6?.split(",").includes(data?.id.toString())
                ? userGroup?.action_6
                    ?.split(",")
                    .includes(data?.id.toString()) && action_6
                : eaction_6
            }
            onChange={action_6HandleChange}
          />
        </div>
      </td>
      <td>
        <div>
          <input
            type="checkbox"
            name="action_7"
            className="checkbox checkbox-sm"
            value={`${data?.id}`}
            checked={
              userGroup?.action_7?.split(",").includes(data?.id.toString())
                ? userGroup?.action_7
                    ?.split(",")
                    .includes(data?.id.toString()) && action_7
                : eaction_7
            }
            onChange={action_7HandleChange}
          />
        </div>
      </td>
      <td>
        <div>
          <input
            type="checkbox"
            name="action_8"
            className="checkbox checkbox-sm"
            value={`${data?.id}`}
            checked={
              userGroup?.action_8?.split(",").includes(data?.id.toString())
                ? userGroup?.action_8
                    ?.split(",")
                    .includes(data?.id.toString()) && action_8
                : eaction_8
            }
            onChange={action_8HandleChange}
          />
        </div>
      </td>
    </tr>
  );
};

export default Task;
