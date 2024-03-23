async function fetchData() {
  try {
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    if (!response.ok) {
      throw new Error("the response is not ok");
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

let data = await fetchData();
console.log(data[0]);
for (let i = 0; i < 100; i++) {
  const htmlString = `<div
class="bg-slate-600 rounded-xl mt-10 ml-10 p-5 flex flex-col content-center items-center w-max"
>
<img
  src="${data[i].image}"
  class="rounded-xl w-40 h-52"
/>
<div class="mt-4">
  <p class="font-mono font-bold text-lg">
    <span class="font-mono font-bold text-pink-500 text-lg">Name: </span
    >${data[i].name}
  </p>
  <p class="font-mono font-bold text-lg">
    <span class="font-mono font-bold text-pink-500 text-lg">Actor: </span
    >${data[i].actor}
  </p>
</div>
<button
  class="bg-zinc-900 text-white p-4 rounded-xl font-bold mt-3 text-xl"
>
  more info
</button>
</div>`;

  let container = document.createElement("div");
  container.innerHTML = htmlString;
  if (data[i].name && data[i].image && data[i].actor) {
    document.body.appendChild(container);
  }
}
