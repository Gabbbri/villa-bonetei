"use client";

import { useEffect } from "react";

export default function LanguageMarker() {
  useEffect(() => {
    document.documentElement.lang = "en";
    return () => { document.documentElement.lang = "it"; };
  }, []);
  return null;
}
