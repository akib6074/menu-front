"use client";
import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import Layout from "../../components/Layout";
import Configuration from "@/app/components/Configuration";
import systemTaskService from "@/app/services/SystemTaskService";

const UserGroupById = () => {
  const [data, setData] = useState([]);
  const getSystemTasks = async () => {
    const systemTasks = await systemTaskService.getAll();
    setData(systemTasks);
  };
  const route = useParams();
  useEffect(() => {
    getSystemTasks();
  }, []);
  return (
    <div>
      <Layout>
        <Configuration data={data} id={+route?.id}/>
      </Layout>
    </div>
  );
};

export default UserGroupById;
