// 确保DOM加载完成后执行代码
/**
 * 段落格式化工具 - 自动处理.article-content元素
 * 保留空行并将段落用<p>标签包裹
 */

(function () {
  // 等待DOM加载完成
  document.addEventListener('DOMContentLoaded', function () {
    // 选择所有.article-content元素
    const articleContents = document.querySelectorAll('.article-content');

    // 遍历并处理每个元素
    articleContents.forEach(container => {
      // 获取原始内容（使用textContent代替innerHTML以避免HTML标签干扰）
      const originalText = container.textContent;

      // 使用捕获组的正则表达式，同时保留分隔符
      // 匹配一个或多个换行符，作为段落分隔标记
      const parts = originalText.split(/([\r\n]+)/);

      // 存储格式化后的内容
      let formattedContent = '';

      // 上一个非空段落的索引
      let lastNonEmptyIndex = -1;

      // 遍历所有部分
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];

        // 判断当前部分是否为文本内容（非换行符）
        if (!part.match(/^[\r\n]+$/)) {
          const trimmed = part.trim();
          // 只有非空文本才创建段落
          if (trimmed.length > 0) {
            formattedContent += `<p>${trimmed}</p>`;
            lastNonEmptyIndex = i;
          }
        }
        // 处理换行符部分，仅在有非空段落之后才处理空行
        else if (lastNonEmptyIndex !== -1) {
          // 检查是否有两个或更多换行符，表示需要保留的空行
          if (part.match(/[\r\n]{2,}/)) {
            // 添加空段落
            formattedContent += '<p>&nbsp;</p>';
          }
        }
      }

      // 更新容器内容
      container.innerHTML = formattedContent;
    });
  });
})();