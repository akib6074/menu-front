import http from "./Http-common";

const getAll = async () => {
  const res = await http.get("user-groups/all");
  return res?.data?.payload?.data;
};

const getById = async(id:number) => {
    const res = await http.get("user-groups/"+id);
    return res?.data?.payload?.data;
}

const updateByFieldandGroupId = async(id: number,field: string, value: string, action: string) => {
  const res = await http.put("user-groups/update/"+id+"/"+field+"/"+value+"/"+action);
  return res?.data?.payload?.data;
}

const userGroupService = {
    getAll,
    getById,
    updateByFieldandGroupId
};
export default userGroupService;