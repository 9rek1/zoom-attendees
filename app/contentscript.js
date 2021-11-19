chrome.runtime.onMessage.addListener(() => {
  const attTab = document.querySelector('.participants-section-container');
  if (!attTab) {
    alert('参加者一覧タブを開いてください');
    return;
  }
  const zoomNames = [];
  document
    .querySelectorAll('.participants-item__display-name')
    .forEach((e) => zoomNames.push(e.innerText));

  const tmp = document.createElement('textarea');
  tmp.value = zoomNames.join('\n');
  document.body.appendChild(tmp);
  tmp.select();
  if (document.execCommand('copy')) alert('コピーしました');
  document.body.removeChild(tmp);
});
