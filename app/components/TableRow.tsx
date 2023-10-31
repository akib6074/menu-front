import { useEffect, useState } from "react";
import { SystemTaskDto } from "../dto/System-task.dto";
import customService from "../services/CustomService";
import userGroupService from "../services/UserGroupService";
import UserGroupDto from "../dto/User-group.dto";
import Module from "./Module";
import Task from "./Task";

const TableRow = ({
  item,
  count,
  max,
  routeParam,
}: {
  item: SystemTaskDto[];
  count: number;
  max: number;
  routeParam: number;
}) => {
  const [arr, setArr] = useState([""]);
  const [arry, setArry] = useState([""]);
  const [arryLate, setArryLate] = useState([""]);
  const [userGroup, setUserGroup] = useState<UserGroupDto>({
    id: 0,
    action_0: "",
    action_1: "",
    action_2: "",
    action_3: "",
    action_4: "",
    action_5: "",
    action_6: "",
    action_7: "",
    action_8: "",
  });
  const helper = (size: number) => {
    const res = customService.arrayGen(size);
    setArr(res || []);
  };
  const helperTwo = (size: number) => {
    const resp = customService.arrayGen(size);
    setArry(resp || []);
  };

  const helperThree = (size: number) => {
    const res = customService.arrayGen(size);
    setArryLate(res);
  }

  const getUserGroups = async () => {
    const res: UserGroupDto = await userGroupService.getById(routeParam);
    setUserGroup(res);
  };
  useEffect(() => {
    helper(count);
    helperTwo(max - count);
    getUserGroups();
    helperThree(max+7);
  }, [count, max]);
  return (
    <>
      {item?.map((data) => (
        <>
          {data?.type == "MODULE" ? (
            <>
              <Module data={data} arr={arr} arrayLate={arryLate} />
              <TableRow
                item={data?.children}
                count={count + 1}
                max={max}
                routeParam={routeParam}
              />
            </>
          ) : (
            <>
            <Task arr={arr} arry={arry} data={data} userGroup={userGroup} routeParam={routeParam} />
            </>
          )}
        </>
      ))}
    </>
  );
};

export default TableRow;
