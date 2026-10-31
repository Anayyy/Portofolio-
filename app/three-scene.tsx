"use client";
import dynamic from "next/dynamic";
const Scene = dynamic(() => import("@/components/lanyard-scene"), { ssr: false, loading: () => <div className="scene-loading" aria-label="Memuat kartu 3D" /> });
export default function ThreeScene(){ return <div className="lanyard-widget"><Scene /></div>; }
