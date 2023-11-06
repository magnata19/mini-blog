//hooks
import { useState, useEffect } from "react";

//firebase
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //deal with memory leak(estou usando um let ao invés de state por conta
  //de um bug no arquivo CreatePost, ao qual ao chamar o método como state, nao conseguia utilizar os métodos
  //que estava chamando, logo após, troquei o state do useEffect para a minha varialvel recebendo true)
  let cancelled = false;

  useEffect(() => {
    async function loadDocument() {
      if (cancelled) return;

      setLoading(true);

      try {
        const docRef = await doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);

        setDocument(docSnap.data());
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(true);
      }
    }
    loadDocument();
  }, [docCollection, id, cancelled]);

  useEffect(() => {
    cancelled = true;
  }, []);

  return { document, loading, error };
};
