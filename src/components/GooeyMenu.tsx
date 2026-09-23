"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, type Transition } from "framer-motion";
import { SocialLink } from '../lib/types';

const spring: Transition = { type: "spring", stiffness: 280, damping: 22, mass: 0.9 };

const BADGE = 40; // badge diameter (px)
const GAP = 12; // space between badge and panel when open
const PANEL_W = 140;
const PANEL_H = 240;


export function GooeyMenu({ socials }: { socials: SocialLink[] }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => { if (!rootRef.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const panelGeometry = open ? { width: PANEL_W, height: PANEL_H, y: -(BADGE + GAP), borderRadius: 18 } : { width: BADGE, height: BADGE, y: 0, borderRadius: BADGE / 2 };

  return (
    <div
      ref={rootRef}
      className="relative"
      style={{ width: BADGE, height: BADGE }}
    >

      {/* Blob layer*/}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-0 left-0 bg-background-dark"
          initial={false}
          animate={panelGeometry}
          transition={spring}
        />
        <div
          className="absolute bottom-0 left-0 rounded-full bg-background-dark"
          style={{ width: BADGE, height: BADGE }}
        />
      </div>

      {/* Content layer */}
      <motion.div
        className="absolute bottom-0 left-0 overflow-hidden"
        initial={false}
        animate={panelGeometry}
        transition={spring}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        {open && (
          <div className="flex h-full flex-col justify-center gap-2 px-4 text-sm">
            {socials.map((social) => (
              <Link key={social.link} href={social.link} onClick={() => setOpen(false)} className="block py-1 text-foreground-light hover:underline first-letter:uppercase">
                {social.name}
              </Link>
            ))}
          </div>
        )}
      </motion.div>

      {/* Badge button */}
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="absolute inset-0 place-items-center rounded-full text-foreground-light outline-none"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ overflow: "visible" }}
        >
          <motion.line
            initial={false}
            animate={open ? { x1: 6, y1: 6, x2: 18, y2: 18 } : { x1: 4, y1: 6, x2: 20, y2: 6 }}
            transition={spring}
          />
          <motion.line
            x1="4" y1="12" x2="20" y2="12"
            animate={{ opacity: open ? 0 : 1 }}
            transition={{ duration: 0.15 }}
          />
          <motion.line
            initial={false}
            animate={open ? { x1: 6, y1: 18, x2: 18, y2: 6 } : { x1: 4, y1: 18, x2: 20, y2: 18 }}
            transition={spring}
          />
        </svg>
      </button>
    </div>
  );
}
