const arrayGen = (size: number) => {
  let res = [];
  for (let i = 0; i < size; i++) {
    res.push("td");
  }
  return res;
};
const customService = { arrayGen };
export default customService;
