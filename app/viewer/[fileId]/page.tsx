// export default async function Viewer({
//   params,
// }: {
//   params: Promise<{ fileId: string }>;
// }) {
//   const { fileId } = await params;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//       }}
//     >
//       <iframe
//         src={`https://drive.google.com/file/d/${fileId}/preview`}
//         width="100%"
//         height="100%"
//         allow="autoplay"
//         style={{
//           border: "none",
//         }}
//       />
//     </div>
//   );
// }



"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Download,
  ExternalLink,
} from "lucide-react";
import styles from "./field.module.css";

export default function ViewerPage() {
  const params = useParams();
  const router = useRouter();


  const fileId = params.fileId as string;
  

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "#f7f3ed",
      }}
    >
      {/* Top Bar */}
      <div className={styles.toolbar}>

<button
  onClick={() => router.back()}
  className={styles.iconBtn}>
  <ArrowLeft size={20} />
</button>

<a
  href={`https://drive.google.com/uc?export=download&id=${fileId}`}
  className={styles.iconBtn}
>
  <Download size={20} />
</a>

<a
  href={`https://drive.google.com/file/d/${fileId}/view`}
  className={styles.iconBtn}
  target="_blank"
>
  <ExternalLink size={20} />
</a>
</div>
      {/* Viewer */}
      <iframe
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        style={{
          flex: 1,
          border: "none",
          width: "100%",
        }}
        allow="autoplay"
      />
    </div>
  );
}