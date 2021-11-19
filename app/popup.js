const muteBtn = document.getElementById('muteBtn');
const copyBtn = document.getElementById('copyBtn');

chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  if (tab.mutedInfo.muted) muteBtn.checked = true;
});

muteBtn.addEventListener('change', toggleMuteState);
copyBtn.addEventListener('click', sendMessage);

function toggleMuteState() {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    if (muteBtn.checked) chrome.tabs.update(tab.id, { muted: true });
    else chrome.tabs.update(tab.id, { muted: false });
  });
}

function sendMessage() {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    if (!tab.url.match(/https:\/\/zoom\.us\/wc\/.+?\/join.*/)) {
      alert('Zoomに参加してください');
    } else {
      chrome.tabs.sendMessage(tab.id, { message: 'null' });
    }
  });
}
