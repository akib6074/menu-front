import { SystemTaskDto } from "../dto/System-task.dto";
import Accordian from "./Accordian";

const Configuration = ({ data, id}: { data: SystemTaskDto[] , id: number}) => {
  return (
    <div>
        <div className="join join-vertical w-full">
          {data?.map((menu: SystemTaskDto) => (
            <>
              <Accordian menu={menu} id={+menu?.id} routeParam={id} />
            </>
          ))}
        </div>
    </div>
  );
};

export default Configuration;
