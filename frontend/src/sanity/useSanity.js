import { useEffect, useState } from "react";
import { sanityClient } from "@/sanity/client";

/**
 * useSanity — fetches Sanity content with graceful fallback.
 *   const { data, loading } = useSanity(query, fallback);
 * `data` is always non-null — it starts as `fallback` and gets replaced
 * only if Sanity returns a non-empty result.
 */
export function useSanity(query, fallback) {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    sanityClient
      .fetch(query)
      .then((res) => {
        if (!alive) return;
        if (Array.isArray(res)) {
          if (res.length > 0) setData(res);
        } else if (res && Object.keys(res).length > 0) {
          setData(res);
        }
      })
      .catch(() => {
        // silent: fallback stays
      })
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return { data, loading };
}
