import React from "react";
import { SystemTaskDto } from "../dto/System-task.dto";
import { APP_URL } from "../config";
const RecursiveMenu = ({ menu }: { menu: SystemTaskDto[] }) => {
  return (
    <>
      <ul className="menu w-45 rounded-box">
        {menu?.map((task) => (
          <>
            <li>
              {task?.children?.length > 0 && task!==null ? (
                <>
                  <details open>
                    <summary>{task?.name_en}</summary>
                    <div>
                      <RecursiveMenu menu={task?.children} />
                    </div>
                  </details>
                </>
              ) : (
                <a href={APP_URL + task?.controller}>{task?.name_en}</a>
              )}
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default RecursiveMenu;
