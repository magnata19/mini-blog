//hooks
import { useState, useEffect } from "react";

//firebase
import { db } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
  QuerySnapshot,
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //deal with memory leak(estou usando um let ao invés de state por conta
  //de um bug no arquivo CreatePost, ao qual ao chamar o método como state, nao conseguia utilizar os métodos
  //que estava chamando, logo após, troquei o state do useEffect para a minha varialvel recebendo true)
  let cancelled = false;

  useEffect(() => {
    async function loadData() {
      if (cancelled) return;

      const collectionRef = await collection(db, docCollection);

      try {
        setLoading(true);

        let q;

        if (search) {
          q = await query(
            collectionRef,
            where("tagsArray", "array-contains", search),
            orderBy("createdAt", "desc")
          );
        } else {
          q = await query(collectionRef, orderBy("createdAt", "desc"));
        }

        await onSnapshot(q, (QuerySnapshot) => {
          setDocuments(
            QuerySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });

        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    }
    loadData();
  }, [docCollection, documents, search, uid, cancelled]);

  useEffect(() => {
    cancelled = true;
  }, []);

  return { documents, loading, error };
};
