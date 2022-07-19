// 存储数据到本地
export function setLocal(key, val) {
  localStorage.setItem(
    key,
    typeof val === "object" ? JSON.stringify(val) : val
  );
}

// 获取本地数据
export function getLocal() {
  const data = localStorage.getItem(key);
  try {
    data = JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
  return data;
}
