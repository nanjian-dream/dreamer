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