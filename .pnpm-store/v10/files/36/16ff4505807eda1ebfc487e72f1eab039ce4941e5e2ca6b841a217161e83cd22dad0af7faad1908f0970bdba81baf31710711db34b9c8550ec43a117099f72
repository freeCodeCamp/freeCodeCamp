import path from "path";
export const getGatsbyVersion = () => {
  try {
    return require(path.join(process.cwd(), `node_modules`, `gatsby`, `package.json`)).version;
  } catch (e) {
    return ``;
  }
};