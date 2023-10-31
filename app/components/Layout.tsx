"use client";
import React, {
  ReactComponentElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import systemTaskService from "../services/SystemTaskService";
import { APP_URL } from "../config";
import { useRouter } from "next/navigation";
import authService from "../services/AuthService";
import RecursiveMenu from "./RecursiveMenu";
import { SystemTaskDto } from "../dto/System-task.dto";
type Menus = {
  id: number;
  name_en: string;
  controller: string;
  children: Menus[];
};
const SideBar = ({ children }: { children: any }) => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const handleLogout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      authService.logout();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const user = JSON.parse(localStorage.getItem("user")||"");
  
  const getSystemTasks = async () => {
    const systemTasks = await systemTaskService.getAllByRole(parseInt(user?.payload?.data?.userGroup?.id));
    setData(systemTasks);
  };
  useEffect(() => {
    getSystemTasks();
  }, []);
  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-full inline-block transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-auto px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <RecursiveMenu menu={data} />
          <form onSubmit={handleLogout}>
            <button className="btn btn-block" type="submit">
              Logout
            </button>
          </form>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
};

export default SideBar;
