import { useEffect, useState } from "react";
import getAdvice from "../services/getAdvice";

export default function useGifs(click) {
  const [advice, setAdvice] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAdvice().then((adv) => {
      setAdvice(adv);
      setIsLoading(false);
    });
  }, [click]);
  return { advice, isLoading };
}
