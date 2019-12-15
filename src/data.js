const data = [];

for (let i = 0; i < 15; i++) {
  const tmp = [];
  for (let j = 1; j <= 15; j++) {
    tmp.push({
      id: i * 15 + j,
      title: `Title ${j}`,
      text: `Hello world ${j}`
    });
  }

  data.push(tmp);
}

export default data;
