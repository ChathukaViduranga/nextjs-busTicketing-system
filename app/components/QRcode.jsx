import QRCode from "react-qr-code";

import React from "react";
import { useSession } from "next-auth/react";

export default function QRcode() {
  const { data: session } = useSession();
  return <QRCode value={"chathuka" || ""} />;
}
//session?.user?.email
