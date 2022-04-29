export default function getAdvice() {
  const apiURL = "https://api.adviceslip.com/advice";

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { slip } = response;
      const { id, advice } = slip;
      return { id, advice };
    });
}
