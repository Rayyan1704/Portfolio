'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CURSOR_AMOUNT = 20;
const CURSOR_WIDTH = 26;

class Dot {
  index: number;
  x: number;
  y: number;
  scale: number;
  element: HTMLSpanElement;

  constructor(index = 0) {
    this.index = index;
    this.x = 0;
    this.y = 0;
    this.scale = 1 - 0.05 * index;
    this.element = document.createElement('span');
    gsap.set(this.element, { scale: this.scale });
  }

  draw() {
    gsap.set(this.element, { x: this.x, y: this.y });
  }
}

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>();

  useEffect(() => {
    if (!cursorRef.current) return;

    // Initialize dots
    dotsRef.current = [];
    cursorRef.current.innerHTML = ''; // Clear previous dots
    for (let i = 0; i < CURSOR_AMOUNT; i++) {
      const dot = new Dot(i);
      dotsRef.current.push(dot);
      cursorRef.current.appendChild(dot.element);
    }
    const dots = dotsRef.current;

    const onMouseMove = (event: MouseEvent) => {
      mousePositionRef.current.x = event.clientX - CURSOR_WIDTH / 2;
      mousePositionRef.current.y = event.clientY - CURSOR_WIDTH / 2;
    };

    const onTouchMove = (event: TouchEvent) => {
      mousePositionRef.current.x = event.touches[0].clientX - CURSOR_WIDTH / 2;
      mousePositionRef.current.y = event.touches[0].clientY - CURSOR_WIDTH / 2;
    };

    const render = () => {
      let x = mousePositionRef.current.x;
      let y = mousePositionRef.current.y;

      dots.forEach((dot, index) => {
        const nextDot = dots[index + 1] || dots[0];
        dot.x = x;
        dot.y = y;
        dot.draw();

        const dx = (nextDot.x - dot.x) * 0.35;
        const dy = (nextDot.y - dot.y) * 0.35;
        x += dx;
        y += dy;
      });

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return <div ref={cursorRef} className="gooey-cursor"></div>;
}