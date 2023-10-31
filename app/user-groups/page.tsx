"use client"
import React, { ReactElement, useEffect, useState } from "react";
import Layout from "../components/Layout";
import userGroupService from "../services/UserGroupService";
import { FaCirclePlus } from "react-icons/fa6";
import { APP_URL } from "../config";
import Link from "next/link";
type UserGroup = {
  id: number,
  name: string,
  ordering: string,
  status: string
};
const UserGroup = () => {
  const [data,setData]=useState([]);
  let [idx,setidx]=useState(1);
  const getAllUserGroups =async()=>{
    const res = await userGroupService.getAll();
    setData(res);
  }
  useEffect(()=>{
    getAllUserGroups();
  },[]);
  console.log(data);
  return (
    <div>
      <Layout>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Ordering</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item: UserGroup)=>(
              <tr>
                <th>{idx++}</th>
                <td>{item?.name}</td>
                <td>{item?.ordering}</td>
                <td>{item?.status}</td>
                <td><Link href={APP_URL+"user-groups/"+item?.id}><button className="btn"><FaCirclePlus /></button></Link></td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
};
UserGroup.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default UserGroup;
