import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  originalX: number;
  originalY: number;
  type: 'pixel' | 'char';
  char?: string;
}

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 120;
    const colors = ['#0891b2', '#65a30d', '#94a3b8']; // Dark Cyan, Dark Lime, Slate
    const chars = ['0', '1', '{', '}', '<', '>', '/', '_'];

    const init = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const isChar = Math.random() > 0.8;
        
        particles.push({
          x,
          y,
          originalX: x,
          originalY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: isChar ? Math.random() * 12 + 12 : Math.random() * 6 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          type: isChar ? 'char' : 'pixel',
          char: chars[Math.floor(Math.random() * chars.length)],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Magnetic attraction to mouse
        if (mouse.current.active) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 300) {
            const force = (300 - distance) / 300;
            p.vx += (dx / distance) * force * 0.4;
            p.vy += (dy / distance) * force * 0.4;
          }
        }

        // Return to "ambient" flow or home position
        const dxHome = p.originalX - p.x;
        const dyHome = p.originalY - p.y;
        p.vx += dxHome * 0.005;
        p.vy += dyHome * 0.005;

        // Apply friction
        p.vx *= 0.94;
        p.vy *= 0.94;

        p.x += p.vx;
        p.y += p.vy;

        // Draw particle
        ctx.fillStyle = p.color;
        
        if (p.type === 'char') {
          ctx.font = `bold ${p.size}px monospace`;
          ctx.globalAlpha = 0.2;
          ctx.fillText(p.char!, p.x, p.y);
        } else {
          ctx.globalAlpha = 0.5;
          ctx.fillRect(p.x, p.y, p.size, p.size);
          
          // Trail effect for pixels
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > 1.5) {
            ctx.beginPath();
            ctx.strokeStyle = p.color;
            ctx.lineWidth = p.size / 2;
            ctx.globalAlpha = 0.2;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x - p.vx * 3, p.y - p.vy * 3);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      mouse.current.active = true;
    };

    const handleMouseLeave = () => {
      mouse.current.active = false;
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave);
    canvas.parentElement?.addEventListener('mouseenter', () => mouse.current.active = true);

    init();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
};

export default ParticleCanvas;
