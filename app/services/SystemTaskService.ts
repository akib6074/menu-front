import http from "./Http-common";

const getAll = async () => {
  const res = await http.get("system-tasks/all");
  return res?.data?.payload?.data;
};

const getAllByRole = async (id: number) => {
  const res = await http.get("system-tasks/role/"+id);
  return res?.data?.payload?.data;
}

const maxDepth = async (id: number) => {
  const res = await http.get("system-tasks/"+id);
  const data = res?.data?.payload?.data;
  let depth = 0;
  const helper = (res: any[]): number=>{
    res.map((data)=>{
      if(data?.children?.length>0){
        depth++;
      }
      helper(data?.children);
    });
    return depth;
  }
  return helper([data]);
};


const systemTaskService = {
    getAll,
    getAllByRole,
    maxDepth
};
export default systemTaskService;