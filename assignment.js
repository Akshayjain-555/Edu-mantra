fetch('assignment.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('assignment-list');
    data.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${item.course} – ${item.title}</h3>
        <a href="${item.link}" target="_blank">📥 Download</a>
        <hr/>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Error loading assignments:", err);
  });
