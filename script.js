const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

fetchPromise.then((resposta) => {
  return resposta.json();
});

const init = async () => {
  const [a, b] = Promise.all([fetchPromise, fetchPromise]);
  const response = await fetchPromise;
  console.log(response);
};
init();

console.log("Requisição iniciada…");
