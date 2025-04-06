<template>
    <canvas ref="canvas" class="fireworks-canvas"></canvas>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const canvas = ref(null);
  let ctx;
  let particles = [];
  let circles = [];
  let animationFrameId;
  
  const colors = ['#ff1a1a', '#33ff33', '#1a73ff', '#ffea00', '#ff0080', '#00ffcc'];
  
  const createParticles = (x, y) => {
    const count = 50; // 颗粒数量
  
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 4;
      const speed = Math.random() * 4 + 1;
      const radius = Math.random() * 12 + 15; // 初始半径较大
  
      particles.push({
        x,
        y,
        initialRadius: radius, // 保存初始半径
        radius, // 当前半径
        color: colors[Math.floor(Math.random() * colors.length)],
        angle,
        speed,
        initialSpeed: speed, // 保存初始速度
        alpha: 1,
        life: 100, // 粒子生命周期
      });
    }
  
    // 创建爆炸圈
    circles.push({
      x,
      y,
      radius: 15, // 初始半径
      maxRadius: 50 + Math.random() * 50, // 最大半径
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 90, // 圆圈生命周期
    });
  };
  
  const updateParticles = () => {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
  
    // 更新粒子
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
  
      const scale = 1 - (p.life / 150);
      const shrinkSpeed = p.initialSpeed * (1 - scale);
  
      p.x += Math.cos(p.angle) * shrinkSpeed;
      p.y += Math.sin(p.angle) * shrinkSpeed;
  
      // 粒子半径随生命周期缩小
      p.radius = p.initialRadius * (p.life / 120);
  
      // 粒子透明度随生命周期变化
      p.alpha = p.life / 120;
  
      // 粒子生命周期减少
      p.life--;
  
      // 如果生命结束，移除粒子
      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
  
      // 绘制粒子
      ctx.beginPath();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  
    // 更新圆圈
    for (let i = circles.length - 1; i >= 0; i--) {
      const c = circles[i];
      
      // 圆圈的半径增大后再缩小
      const scale = 1 - (c.life / 90);
      c.radius = c.maxRadius * scale;
  
      // 圆圈生命周期减少
      c.life--;
  
      // 如果生命结束，移除圆圈
      if (c.life <= 0) {
        circles.splice(i, 1);
        continue;
      }
  
      // 绘制圆圈
      ctx.beginPath();
      ctx.globalAlpha = 0.5; // 圆圈的透明度稍微降低
      ctx.strokeStyle = c.color;
      ctx.lineWidth = 2;
      ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 4);
      ctx.stroke();
    }
  
    ctx.globalAlpha = 1;
    animationFrameId = requestAnimationFrame(updateParticles);
  };
  
  const handleClick = (e) => {
    createParticles(e.clientX, e.clientY);
  };
  
  onMounted(() => {
    const canvasEl = canvas.value;
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;
    ctx = canvasEl.getContext('2d');
  
    window.addEventListener('click', handleClick);
    animationFrameId = requestAnimationFrame(updateParticles);
  });
  
  onUnmounted(() => {
    window.removeEventListener('click', handleClick);
    cancelAnimationFrame(animationFrameId);
  });
  </script>
  
  <style scoped>
  .fireworks-canvas {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
  }
  </style>
  