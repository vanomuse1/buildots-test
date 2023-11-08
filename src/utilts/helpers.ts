export const toggleItemInArray = (arr: string[], item: string) => {
  if (arr.includes(item)) {
    return arr.filter(i => i !== item);
  } else {
    return [...arr, item];
  }
};

export const isItemInArray = (arr: string[], item: string) => {
  return arr.includes(item);
};

export const arraysEqualLength = (arr1: any[], arr2: any[]) => {
  return arr1.length === arr2.length;
};
