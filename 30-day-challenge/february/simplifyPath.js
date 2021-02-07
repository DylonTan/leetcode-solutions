/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let pathArr = path.split("/");
  let queue = [];
  let newPath = "";

  for (let i = 0; i < pathArr.length; i++) {
    let current = pathArr[i];
    if (queue.length > 0 && current === "..") queue.pop();

    if (
      current !== "." &&
      current !== "/" &&
      current !== ".." &&
      current !== ""
    ) {
      queue.push(current);
    }
  }

  if (queue.length === 0) return "/";

  while (queue.length > 0) {
    let directory = queue.shift();
    newPath += `/${directory}`;
  }

  return newPath;
};
