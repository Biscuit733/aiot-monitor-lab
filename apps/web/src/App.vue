<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Device } from './types/device' // 添加 type 关键字

// 1. 使用 ref 包装，使其成为响应式数据
const devices = ref<Device[]>([
  {
    id: 1,
    title: 'Device 1',
    status: 'Online',
    online: true,
    alarm: false,
    type: 'Machine',
  },
  {
    id: 2,
    title: 'Device 2',
    status: 'Offline',
    online: false,
    alarm: false,
    type: 'Machine',
  }
])

// 2. 使用 computed 提取计算逻辑，利用其缓存特性提升性能
const onlineCount = computed(() => devices.value.filter(device => device.online).length)
const alarmCount = computed(() => devices.value.filter(device => device.alarm).length)
</script>

<template>
  <div class="main-box">
    <div class="title">
      AIoT Monitor Lab
    </div>
    <div class="description">
      Industrial Device Monitoring Platform
    </div>

    <div class="content">
      <div class="system">
        System Status
        <div class="status">
          Online
        </div>
      </div>
      <div class="device">
        Devices
        <div class="online-num">
          <!-- 3. 模板更加整洁 -->
          {{ onlineCount }}
        </div>
      </div>
      <div class="alarm">
        Active Alarms
        <div class="alarm-num">
          {{ alarmCount }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 引入一种现代感强一点的无衬线字体（如果项目里有可以忽略） */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

.main-box {
  /* 确保父级容器没有默认 margin，建议在全局 reset 里设置 body { margin: 0; } */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* 科技感深色渐变背景 */
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #e2e8f0;
  font-family: 'Inter', system-ui, sans-serif;
}

.title {
  font-size: 3rem;
  font-weight: 800;
  /* 标题文字渐变色 */
  background: linear-gradient(to right, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
}

.description {
  font-size: 1.1rem;
  color: #94a3b8;
  margin-bottom: 4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.content {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap; /* 适配小屏幕 */
  justify-content: center;
}

/* 统一的毛玻璃卡片样式 */
.system, .device, .alarm {
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 600;
  color: #cbd5e1;
}

/* 卡片悬浮微动效，增加交互感 */
.system:hover, .device:hover, .alarm:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 255, 255, 0.15);
}

/* 数值大字重统一样式 */
.status, .online-num, .alarm-num {
  margin-top: 1.5rem;
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1;
  text-shadow: 0 0 20px currentColor; /* 增加发光效果 */
}

/* 针对不同状态的颜色区分 (红绿蓝) */
.system .status {
  font-size: 2.5rem; /* 文字状态稍微小一点，避免撑破 */
  color: #10b981; /* 翡翠绿 - 代表正常 */
}

.device .online-num {
  color: #38bdf8; /* 科技蓝 - 代表在线设备 */
}

.alarm .alarm-num {
  color: #f43f5e; /* 警示红 - 代表告警 */
  /* 如果有告警，增加脉冲呼吸灯效果 */
  animation: pulse 2s infinite;
}

/* 告警数字的呼吸灯动画 */
@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; text-shadow: 0 0 30px #f43f5e; }
  100% { opacity: 1; }
}
</style>