import React from "react";
import { Navigate } from "react-router-dom";
export default function Protege({ esConnecter, children }) {
  if (!esConnecter) return <Navigate to={"/"} />;
  return <>{children}</>;
}
