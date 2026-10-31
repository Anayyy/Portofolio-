"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, useTexture } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function IdCard() {
  const photo = useTexture("/assets/profile.jpg");
  const map = useMemo(() => {
    const canvas = document.createElement("canvas"); canvas.width = 760; canvas.height = 960;
    const ctx = canvas.getContext("2d")!;
    const gradient = ctx.createLinearGradient(0, 0, 760, 960);
    gradient.addColorStop(0, "#293942"); gradient.addColorStop(.6, "#11191e"); gradient.addColorStop(1, "#273239");
    ctx.fillStyle = gradient; ctx.fillRect(0, 0, 760, 960);
    ctx.fillStyle = "#cbd8db"; ctx.font = "700 56px Arial"; ctx.fillText("UN.", 55, 95);
    ctx.fillStyle = "#eef2f2"; ctx.font = "600 24px Arial"; ctx.fillText("UNIVERSITAS NASIONAL", 180, 68);
    ctx.fillStyle = "#aab7ba"; ctx.font = "16px Arial"; ctx.fillText("JAKARTA Ã‚Â· INDONESIA", 182, 97);
    ctx.strokeStyle = "#ffffff40"; ctx.beginPath(); ctx.moveTo(52, 145); ctx.lineTo(708, 145); ctx.stroke();
    ctx.fillStyle = "#c4ced1"; ctx.font = "15px monospace"; ctx.fillText("FAKULTAS TEKNOLOGI KOMUNIKASI DAN INFORMATIKA", 55, 179);
    ctx.save(); ctx.beginPath(); ctx.roundRect(55, 240, 250, 346, 12); ctx.clip();
    const image = photo.image as HTMLImageElement;
    const scale = Math.max(250 / image.width, 346 / image.height);
    ctx.filter = "grayscale(45%)";
    ctx.drawImage(image, 55 + (250 - image.width * scale) / 2, 240 + (346 - image.height * scale) / 2, image.width * scale, image.height * scale);
    ctx.restore();
    ctx.fillStyle = "#aab7ba"; ctx.font = "16px monospace"; ctx.fillText("STUDENT / INFORMATIKA", 345, 285);
    ctx.fillStyle = "#f3f5f4"; ctx.font = "600 43px Arial"; ctx.fillText("Octiyana Fa'iz", 345, 365);
    ctx.font = "24px Arial"; ctx.fillText("Surya Permana", 345, 405);
    ctx.fillStyle = "#c1cdd0"; ctx.font = "20px monospace"; ctx.fillText("25 OKTOBER 2006", 345, 464);
    ctx.fillStyle = "#d1dde0"; ctx.font = "600 21px monospace"; ctx.fillText("INFORMATIKA", 345, 520);
    ctx.fillStyle = "#93a2a6"; ctx.font = "16px Arial"; ctx.fillText("Software Engineering", 345, 556);
    ctx.strokeStyle = "#ffffff40"; ctx.beginPath(); ctx.moveTo(55, 635); ctx.lineTo(705, 635); ctx.stroke();
    ctx.fillStyle = "#cbd5d8"; ctx.font = "18px monospace"; ctx.fillText("UNAS Ã¢â‚¬â€ INFORMATIKA", 55, 682);
    ctx.fillStyle = "#f2f5f5"; ctx.font = "600 25px monospace"; ctx.fillText("OFS.STUDENT.01", 55, 725);
    ctx.fillStyle = "#edf0ee"; ctx.fillRect(578, 648, 118, 118); ctx.fillStyle = "#111519";
    let seed = 2025;
    for (let y = 0; y < 15; y++) for (let x = 0; x < 15; x++) { seed = (seed * 9301 + 49297) % 233280; if (seed % 2 > .8) ctx.fillRect(590 + x * 7, 660 + y * 7, 6, 6); }
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; return texture;
  }, [photo]);
  return <group><RoundedBox args={[2.72, 3.44, .09]} radius={.13} smoothness={4}><meshStandardMaterial color="#182127" metalness={.4} roughness={.27} /></RoundedBox><mesh position={[0, 0, .052]}><planeGeometry args={[2.62, 3.34]} /><meshBasicMaterial map={map} toneMapped={false} /></mesh></group>;
}
const strapTexture = (() => {
  const canvas = document.createElement("canvas"); canvas.width = 256; canvas.height = 512;
  const ctx = canvas.getContext("2d")!; ctx.fillStyle = "#27343a"; ctx.fillRect(0, 0, 256, 512);
  for (let x = 0; x < 256; x += 4) { ctx.fillStyle = x % 8 ? "#202a2f" : "#35464d"; ctx.fillRect(x, 0, 2, 512); }
  ctx.fillStyle = "#d1dadd"; ctx.font = "600 19px monospace"; ctx.textAlign = "center"; ctx.save(); ctx.translate(128,255); ctx.rotate(-Math.PI/2); ctx.fillText("INFORMATIKA UNAS Â· 01001001",0,0); ctx.restore();
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; return texture;
})();
function StaticStrap() {
  return <>
    <mesh position={[0,2.77,-.02]} rotation={[0,0,Math.PI]}><torusGeometry args={[.48,.105,16,48,Math.PI]}/><meshStandardMaterial color="#87979c" metalness={.72} roughness={.24}/></mesh>
    <mesh position={[0,2.18,-.02]}><planeGeometry args={[.44,1.2]}/><meshStandardMaterial map={strapTexture} metalness={.17} roughness={.8}/></mesh>
  </>;
}
function ElasticLink({ stretch }: { stretch: React.MutableRefObject<number> }) {
  const link=useRef<THREE.Mesh>(null);
  useFrame(()=>{if(link.current){const amount=Math.max(0,stretch.current);link.current.scale.y=1+amount*2.5;link.current.position.y=1.5-amount*.42;}});
  return <mesh ref={link} position={[0,1.5,-.01]}><cylinderGeometry args={[.045,.045,.38,16]}/><meshStandardMaterial color="#34434a" roughness={.55}/></mesh>;
}
function PullableCard() {
  const card=useRef<THREE.Group>(null);const pull=useRef(0);const {invalidate}=useThree();
  useFrame((_,dt)=>{if(!card.current)return;const target=pull.current;card.current.position.y=THREE.MathUtils.damp(card.current.position.y,-target*1.65,8,dt);if(Math.abs(card.current.position.y+target*1.65)>.002)invalidate();});
  return <group ref={card} onPointerDown={e=>{pull.current=0;}} onPointerMove={e=>{if(e.buttons>0){pull.current=THREE.MathUtils.clamp(-e.pointer.y*.9,0,1.25);invalidate();}}} onPointerUp={()=>{pull.current=0;invalidate();}}>
    <mesh position={[0,1.36,0]}><boxGeometry args={[.18,.24,.12]}/><meshStandardMaterial color="#aab5b8" metalness={.84} roughness={.2}/></mesh>
    <mesh position={[0,1.5,.02]}><torusGeometry args={[.08,.02,8,24]}/><meshStandardMaterial color="#c4d0d2" metalness={.8} roughness={.22}/></mesh>
    <ElasticLink stretch={pull}/><IdCard/>
  </group>;
}
function Rotation({children}:{children:React.ReactNode}) {
  const group=useRef<THREE.Group>(null);const motion=useRef({down:false,x:0,y:0,rotX:0,rotY:0});const {invalidate}=useThree();
  useFrame((_,dt)=>{if(!group.current)return;const m=motion.current;group.current.rotation.y=THREE.MathUtils.damp(group.current.rotation.y,m.rotY,8,dt);group.current.rotation.x=THREE.MathUtils.damp(group.current.rotation.x,m.rotX,8,dt);if(Math.abs(group.current.rotation.y-m.rotY)+Math.abs(group.current.rotation.x-m.rotX)>.001)invalidate();});
  return <group ref={group} onPointerDown={e=>{e.stopPropagation();motion.current.down=true;motion.current.x=e.clientX;motion.current.y=e.clientY;}} onPointerMove={e=>{const m=motion.current;if(m.down){m.rotY+=(e.clientX-m.x)*.012;m.rotX=THREE.MathUtils.clamp(m.rotX+(e.clientY-m.y)*.009,-1.15,1.15);m.x=e.clientX;m.y=e.clientY;invalidate();}}} onPointerUp={()=>{motion.current.down=false;}} onPointerLeave={()=>{motion.current.down=false;}}>{children}</group>;
}
export default function LanyardScene(){return <div className="lanyard-canvas" role="group" aria-label="Tali atas tetap diam. Tarik kartu ke bawah seperti karet, lalu lepaskan untuk melihatnya membal. Drag horizontal untuk memutar lanyard 360 derajat."><div className="canvas-glow" aria-hidden="true"/><Canvas frameloop="demand" dpr={[1,1.35]} camera={{position:[0,.35,8.3],fov:34}} gl={{antialias:true,alpha:true,powerPreference:"low-power"}}><ambientLight intensity={1.8}/><directionalLight position={[3,5,6]} intensity={2.4}/><Suspense fallback={null}><StaticStrap/><Rotation><PullableCard/></Rotation></Suspense></Canvas><span className="canvas-caption"><span className="live-dot"/> DRAG CARD 360Â°</span></div>;}
