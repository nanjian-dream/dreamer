// 禁用历史记录控件
Config.history.controls = false; 

// 返回
predisplay["Menu Return"] = function (taskName) {

  if (!tags().includes("noreturn")) {

    State.variables.return = passage();

  }

};

// 全局nobr
Config.passages.nobr = true;

// 实现redo的效果
window.redo = (tags = '') => {
  tags = String(tags).trim().splitOrEmpty(/\s+/)
  triggerEvent(':redo', document, { detail: { tags } });
}
window.redo = window.redo || setup.redo;

// 本地保存变量
window.save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
}
window.load = (key) => {
  if (key.length == 0) {
    return "暂无数据"
  }
  const storedValue = localStorage.getItem(key);
  if (storedValue === null) {
    return "暂无数据"; // 无对应key时返回提示
  }
  try {
    return JSON.parse(storedValue);
  } catch (error) {
    console.error("解析本地存储数据失败:", error);
    return "数据格式错误"; // 解析失败时返回提示
  }
}